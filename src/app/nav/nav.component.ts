import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { TranslateService } from '@ngx-translate/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  languages = ['eng', 'uz', 'ru']

  storedTheme = localStorage.getItem('theme-color')

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.languages)
    translateService.setDefaultLang('eng')
    this.translateService.use('eng')
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed 
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth}) 
  }

  closeSideNav(): void {
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth}) 
  }
  
  setTheme() {
    if (this.storedTheme === "theme-dark") {
      localStorage.setItem('theme-color', 'theme-light')
      this.storedTheme = localStorage.getItem('theme-color')
    } else {
      localStorage.setItem('theme-color', 'theme-dark')
      this.storedTheme = localStorage.getItem('theme-color')
    }
  }

  selectLang(lang: string) {
    this.translateService.use(lang)
  }
}
