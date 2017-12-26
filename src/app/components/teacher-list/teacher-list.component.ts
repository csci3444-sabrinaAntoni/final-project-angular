import { Component, OnInit } from '@angular/core';
import {TeacherListDataService} from '../../services/teacher-list-data.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[];
  isToDisplayTeachers: boolean = false;
  
  constructor(private teacherListDataService:TeacherListDataService) { }

  ngOnInit() {

    this.teacherListDataService.getTeachers().subscribe( (teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });
  }

  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }

}

interface Teacher {
  teacherId: string,
  name: string,
  lastname: string,
  title: string,
  age: number,
  isFullTime: boolean,
  updatedOn: Date
}
