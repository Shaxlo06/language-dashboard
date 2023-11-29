import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangTypesDataService } from '../auth/lang-types-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../auth/search.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit{
  languages !: any
  languageTypes !: any
  selected !: any
  public searchForm !: FormGroup
  searchArray: any = {}
  swapPosition!: any
  datas: any
  data: any = []
  value !: any;
  count: any = 0
  langSelected : any = {};
  modifiedText: any
  toText!: any
  nrSelect = ""
  
  @ViewChild('dropdown') dropdown!: ElementRef
  constructor(private formBuilder : FormBuilder, private langApi: LangTypesDataService,  private api: SearchService) {}
  
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchWord : this.formBuilder.control('', Validators.required),  
      selectedLangFrom: this.formBuilder.control('', Validators.required),
      selectedLangTo: this.formBuilder.control('', Validators.required),
    }) 
    this.getAllDatas()
  }
  
  change() {
    
    
    this.count = this.value.split("").length
    console.log(this.value);
    
    
    
  } 
  
  traslate(){
    let data = {
      wordFrom: this.searchForm.value.selectedLangFrom,
      wordTo:  this.searchForm.value.selectedLangTo
    }
    console.log( this.value, data.wordFrom, data.wordTo);
    
    let apiTr = `https://api.mymemory.translated.net/get?q=${this.value}&langpair=${data.wordFrom}|${data.wordTo}`  
    fetch(apiTr)
    .then(res => res.json())
    .then((result: any) => 
      this.toText = result.responseData.translatedText
    )
  }
  
  onLangSelected() {      
  }
  
  
  getAllDatas() {
    this.langApi.get()
    .subscribe(res => {
      this.languageTypes = res
      // console.log(this.languages);
      
    })
  }
  
}
