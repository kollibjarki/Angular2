import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../shared/product';
import { ValueService } from '../shared/value.service';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{

    constructor(
        private valueService: ValueService
    ){}

    transform(products: any, searchTerm: string){
        if(searchTerm === undefined || searchTerm == "") return null;
        return this.valueService.searchList.filter(function(product){
            return product.Name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    }
}