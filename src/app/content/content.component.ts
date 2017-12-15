import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('a#panel-1').click(function() {
    	$('#g_herpes').attr("display","none");
    console.log('jbg');
    });
  }

}
