import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { SharedLibService } from "angular-shared-lib";


const options = {
  remoteEntry: 'http://localhost:5000/remoteEntry.js',
  remoteName: 'shell',
  exposedModule: './common.service',

  displayName: 'CommonService',
  componentName: 'CommonService'
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(public sharedLibService:SharedLibService) { 
    // this.getRemote();
  }

  ngOnInit(): void {
    // debugger
    // this.sharedService.showAlert()
    
  }

  // async getRemote(): Promise<void>{
  //   const CommonService =  await loadRemoteModule(options)
  //   .then(m =>{
  //     // debugger
  //     return m[options.componentName]});
  //     debugger
  //     this.sharedService  =new  CommonService();
  //     this.sharedService.showAlert();
  // }

}
