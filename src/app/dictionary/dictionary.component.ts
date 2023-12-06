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
  languages : any = []
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
  languageTypes: any = [
    {
      "code": "am-ET",
      "name": "Amharic"
    },
    {
      "code": "ar-SA",
      "name": "Arabic"
    },
    {
      "code": "be-BY",
      "name": "Bielarus"
    },
    {
      "code": "bem-ZM",
      "name": "Bemba"
    },
    {
      "code": "bi-VU",
      "name": "Bislama"
    },
    {
      "code": "bjs-BB",
      "name": "Bajan"
    },
    {
      "code": "bn-IN",
      "name": "Bengali"
    },
    {
      "code": "bo-CN",
      "name": "Tibetan"
    },
    {
      "code": "br-FR",
      "name": "Breton"
    },
    {
      "code": "bs-BA",
      "name": "Bosnian"
    },
    {
      "code": "ca-ES",
      "name": "Catalan"
    },
    {
      "code": "cop-EG",
      "name": "Coptic"
    },
    {
      "code": "cs-CZ",
      "name": "Czech"
    },
    {
      "code": "cy-GB",
      "name": "Welsh"
    },
    {
      "code": "da-DK",
      "name": "Danish"
    },
    {
      "code": "dz-BT",
      "name": "Dzongkha"
    },
    {
      "code": "de-DE",
      "name": "German"
    },
    {
      "code": "dv-MV",
      "name": "Maldivian"
    },
    {
      "code": "el-GR",
      "name": "Greek"
    },
    {
      "code": "en-GB",
      "name": "English"
    },
    {
      "code": "es-ES",
      "name": "Spanish"
    },
    {
      "code": "et-EE",
      "name": "Estonian"
    },
    {
      "code": "eu-ES",
      "name": "Basque"
    },
    {
      "code": "fa-IR",
      "name": "Persian"
    },
    {
      "code": "fi-FI",
      "name": "Finnish"
    },
    {
      "code": "fn-FNG",
      "name": "Fanagalo"
    },
    {
      "code": "fo-FO",
      "name": "Faroese"
    },
    {
      "code": "fr-FR",
      "name": "French"
    },
    {
      "code": "gl-ES",
      "name": "Galician"
    },
    {
      "code": "gu-IN",
      "name": "Gujarati"
    },
    {
      "code": "ha-NE",
      "name": "Hausa"
    },
    {
      "code": "he-IL",
      "name": "Hebrew"
    },
    {
      "code": "hi-IN",
      "name": "Hindi"
    },
    {
      "code": "hr-HR",
      "name": "Croatian"
    },
    {
      "code": "hu-HU",
      "name": "Hungarian"
    },
    {
      "code": "id-ID",
      "name": "Indonesian"
    },
    {
      "code": "is-IS",
      "name": "Icelandic"
    },
    {
      "code": "it-IT",
      "name": "Italian"
    },
    {
      "code": "ja-JP",
      "name": "Japanese"
    },
    {
      "code": "kk-KZ",
      "name": "Kazakh"
    },
    {
      "code": "km-KM",
      "name": "Khmer"
    },
    {
      "code": "kn-IN",
      "name": "Kannada"
    },
    {
      "code": "ko-KR",
      "name": "Korean"
    },
    {
      "code": "ku-TR",
      "name": "Kurdish"
    },
    {
      "code": "ky-KG",
      "name": "Kyrgyz"
    },
    {
      "code": "la-VA",
      "name": "Latin"
    },
    {
      "code": "lo-LA",
      "name": "Lao"
    },
    {
      "code": "lv-LV",
      "name": "Latvian"
    },
    {
      "code": "men-SL",
      "name": "Mende"
    },
    {
      "code": "mg-MG",
      "name": "Malagasy"
    },
    {
      "code": "mi-NZ",
      "name": "Maori"
    },
    {
      "code": "ms-MY",
      "name": "Malay"
    },
    {
      "code": "mt-MT",
      "name": "Maltese"
    },
    {
      "code": "my-MM",
      "name": "Burmese"
    },
    {
      "code": "ne-NP",
      "name": "Nepali"
    },
    {
      "code": "niu-NU",
      "name": "Niuean"
    },
    {
      "code": "nl-NL",
      "name": "Dutch"
    },
    {
      "code": "no-NO",
      "name": "Norwegian"
    },
    {
      "code": "ny-MW",
      "name": "Nyanja"
    },
    {
      "code": "ur-PK",
      "name": "Pakistani"
    },
    {
      "code": "pau-PW",
      "name": "Palauan"
    },
    {
      "code": "pa-IN",
      "name": "Panjabi"
    },
    {
      "code": "ps-PK",
      "name": "Pashto"
    },
    {
      "code": "pis-SB",
      "name": "Pijin"
    },
    {
      "code": "pl-PL",
      "name": "Polish"
    },
    {
      "code": "pt-PT",
      "name": "Portuguese"
    },
    {
      "code": "rn-BI",
      "name": "Kirundi"
    },
    {
      "code": "ro-RO",
      "name": "Romanian"
    },
    {
      "code": "ru-RU",
      "name": "Russian"
    },
    {
      "code": "sg-CF",
      "name": "Sango"
    },
    {
      "code": "si-LK",
      "name": "Sinhala"
    },
    {
      "code": "sk-SK",
      "name": "Slovak"
    },
    {
      "code": "sm-WS",
      "name": "Samoan"
    },
    {
      "code": "sn-ZW",
      "name": "Shona"
    },
    {
      "code": "so-SO",
      "name": "Somali"
    },
    {
      "code": "sq-AL",
      "name": "Albanian"
    },
    {
      "code": "sr-RS",
      "name": "Serbian"
    },
    {
      "code": "sv-SE",
      "name": "Swedish"
    },
    {
      "code": "sw-SZ",
      "name": "Swahili"
    },
    {
      "code": "ta-LK",
      "name": "Tamil"
    },
    {
      "code": "te-IN",
      "name": "Telugu"
    },
    {
      "code": "tet-TL",
      "name": "Tetum"
    },
    {
      "code": "tg-TJ",
      "name": "Tajik"
    },
    {
      "code": "th-TH",
      "name": "Thai"
    },
    {
      "code": "ti-TI",
      "name": "Tigrinya"
    },
    {
      "code": "tk-TM",
      "name": "Turkmen"
    },
    {
      "code": "tl-PH",
      "name": "Tagalog"
    },
    {
      "code": "tn-BW",
      "name": "Tswana"
    },
    {
      "code": "to-TO",
      "name": "Tongan"
    },
    {
      "code": "tr-TR",
      "name": "Turkish"
    },
    {
      "code": "uk-UA",
      "name": "Ukrainian"
    },
    {
      "code": "uz-UZ",
      "name": "Uzbek"
    },
    {
      "code": "vi-VN",
      "name": "Vietnamese"
    },
    {
      "code": "wo-SN",
      "name": "Wolof"
    },
    {
      "code": "xh-ZA",
      "name": "Xhosa"
    },
    {
      "code": "yi-YD",
      "name": "Yiddish"
    },
    {
      "code": "zu-ZA",
      "name": "Zulu"
    }
  ]
  
  
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
    this.languages.push(this.languageTypes)
    console.log(this.languages);
  }
}
