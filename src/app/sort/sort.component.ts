import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/student';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  students:Student[]=[]
   percentages:any=[];
  constructor()
  {
    let s1= new Student(1,"Ank",60,2,["java","python"])
    let s2= new Student(2,"Max",70,4,["angular","oops","javascrit"])
    let s3= new Student(3,"Sam",85,2,["oops"])
    let s4= new Student(4,"Tim",45,8,["python","angular","oops"])
    let s5= new Student(5,"Bob",90,1,["angular","javascrit"])

    this.students.push(s1)
    this.students.push(s2)
    this.students.push(s3)
    this.students.push(s4)
    this.students.push(s5)


  }
  sortByPercentage()
  {
    this.percentages=this.students.sort((a, b) => a.percentage.toString().localeCompare(b.percentage.toString()));
  }
  sortByAttempts()
  {
    this.percentages=this.students.sort((a, b) => a.noOfAttemps.toString().localeCompare(b.noOfAttemps.toString()));
  }
  sortByNoOfsubLearning()
  {
    this.percentages=this.students.sort((a, b) => a.subjectLearning.length.toString().localeCompare(b.subjectLearning.length.toString()));
 
  }
}
