import { QueryParserPipe } from "@/common/pipes";
import { CreateWhiteListedDto } from "@/modules/white_listed_address/dto/create-white-listed-address.dto";
import { WhiteListedService } from "@/modules/white_listed_address/white_listed_address.service";
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
} from "@nestjs/common";

@Controller({ path: "white-listed-addresses" })
export class WhiteListedController {
  constructor(private readonly whiteListedService: WhiteListedService) {}

  @Get()
  findAll(@Query(new QueryParserPipe("MANY", [])) findOption) {
    return this.whiteListedService.findAll(findOption);
  }

  @Get()
  findOne(@Query(new QueryParserPipe("ONE")) findOption) {
    return this.whiteListedService.findOne(findOption);
  }

  @Post()
  create(@Body(new ValidationPipe()) dto: CreateWhiteListedDto) {
    console.log({ dto });
    return this.whiteListedService.createOne(dto);
  }
}
