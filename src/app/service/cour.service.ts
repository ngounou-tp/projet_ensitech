import { Injectable } from '@angular/core';
import { Cours } from '../domain/cour.model';
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CoursService { 
  private courses: Cours[] = [
    { id: '1', title: 'Angular Basics', description: 'Learn the basics of Angular framework.', category: 'Frontend', duration: '5' },
    { id: '2', title: 'React for Beginners', description: 'An introduction to ReactJS.', category: 'Frontend', duration: '6' },
    { id: '3', title: 'Node.js Introduction', description: 'Get started with Node.js for backend development.', category: 'Backend', duration: '7' },
    { id: '4', title: 'Introduction to MongoDB', description: 'Learn MongoDB NoSQL database concepts.', category: 'Database', duration: '4' }
  ];

  constructor() {}

  getCours(): Observable<Cours[]> {
    return of(this.courses);  
  }

  createCours(course: Cours): Observable<Cours> {
    course.id = (this.courses.length + 1).toString();  
    this.courses.push(course);  
    return of(course);  
  }

  updateCourse(course: Cours): Observable<Cours> {
    const index = this.courses.findIndex(c => c.id === course.id);
    if (index !== -1) {
      this.courses[index] = course;  
    }
    return of(course);  
  }

  deleteCours(id: string): Observable<void> {
    this.courses = this.courses.filter(course => course.id !== id);  
    return of();  
  }
}
