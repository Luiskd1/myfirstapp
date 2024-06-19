import { Injectable } from '@nestjs/common';
import { CreateLibrary } from './dto/create-Library.dto';
import { HfInference } from '@huggingface/inference';

interface TranslationParams {
    model: string;
    inputs: string | string[];
    parameters: {
      src_lang: string;
      tgt_lang: string;
    };
  }



@Injectable()
export class LibraryService {

   private libraryfull = [{
        book:"the harry potter",
        descripcion:"the excalibrum",
       
    }]



    async getLibrary(){
        
        const hf = new HfInference("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")       
        const imageUrl = "https://i.pinimg.com/736x/7a/35/d2/7a35d21e50463747dca6308e86a6be50.jpg" 
        const response = await fetch(imageUrl)
        const blob = await response.blob()
        
        const model = "nlpconnect/vit-gpt2-image-captioning"
        
        const result = await hf.imageToText({
            data: blob,
            model: model
          })


         const respita =  await hf.request({
            model: 'vinetran/movie__recommender',
            inputs: '300',
            parameters: {
              custom_param: 'some magic',
            }
          })
        
          console.log(respita)
        
        return  result
    }


    newLibrary(datali){
        this.libraryfull.push({...datali,id:this.libraryfull.length + 1 })
        return   this.libraryfull 
    }







}
