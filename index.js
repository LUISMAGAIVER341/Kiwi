import fs from 'fs';
import kiwiStyler from "simple-stylesheet;"
import selectElement from './features/pseudohtml';
import express from 'express';
import path from 'path';
import expo from './features/expo';
const appBuilder = fs.readFileSync('./app/main.kiwi', 'utf8');

eval(appBuilder);


