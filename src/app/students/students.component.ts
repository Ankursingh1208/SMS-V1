import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students:Student[]=[]
  deletionMessage: string = ''
  colorClass:string=''

  constructor(){
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

  showStudents() {

  }
  deleteStudent(rollno:number){
    const result= confirm('Want to delete student with rollno :'+rollno)
    if(result){
      this.students= this.students.filter(s => s.rollno != rollno)
      this.deletionMessage = 'Deletion completed for RollNo:' +rollno;
      this.colorClass='success'
    } else {
      this.deletionMessage = 'Deletion cancelled for RollNo:' +rollno;
      this.colorClass='error'
    }
  }

  updateStudent(s:Student){
    console.log('Student details to update:', s);
  }

}
