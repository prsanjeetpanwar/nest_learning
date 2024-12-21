import { Controller,Delete,Get ,Post,Put} from '@nestjs/common';

@Controller('songs')

export class SongController {
    @Post()
    create(){
        return 'This action adds a new song';
    }
   @Get()
    findAll(){
        return 'This action returns a list of all songs';
    }

    @Get(`:id`)
    findOne(){
        return 'This action returns a single song by id';
    }
    @Put(':id')
    update(){
        return 'This action updates a song by id';
    }
    @Delete(':id')
    delete(){
        return 'This action deletes a song by id';
    }





}
