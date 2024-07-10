import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  imports: [AppMaterialModule, CommonModule, ReactiveFormsModule],
  exports: [AppMaterialModule, CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
