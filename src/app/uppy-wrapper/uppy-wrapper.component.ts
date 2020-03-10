import {Component, OnInit} from '@angular/core';

import * as Uppy from 'uppy';
import {Dashboard, GoogleDrive, Dropbox, Instagram, Webcam, Tus} from 'uppy';

@Component({
  selector: 'app-uppy-wrapper',
  templateUrl: './uppy-wrapper.component.html',
  styleUrls: ['./uppy-wrapper.component.css']
})
export class UppyWrapperComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const uppy = Uppy.Core();
    uppy.use(Dashboard, {
      trigger: '.UppyModalOpenerBtn',
      inline: true,
      target: '.DashboardContainer',
      replaceTargetContent: true,
      showProgressDetails: true,
      note: 'Images and video only, 2–3 files, up to 1 MB',
      height: 470,
      metaFields: [
        {id: 'name', name: 'Name', placeholder: 'file name'},
        {id: 'caption', name: 'Caption', placeholder: 'describe what the image is about'}
      ],
      browserBackButtonClose: true
    })
      .use(GoogleDrive, {target: Dashboard, companionUrl: 'https://companion.uppy.io'})
      .use(Dropbox, {target: Dashboard, companionUrl: 'https://companion.uppy.io'})
      .use(Instagram, {target: Dashboard, companionUrl: 'https://companion.uppy.io'})
      .use(Webcam, {target: Dashboard})
      .use(Tus, {endpoint: 'https://master.tus.io/files/'});

    uppy.on('complete', result => {
      console.log('successful files:', result.successful);
      console.log('failed files:', result.failed);
    });
  }

}
