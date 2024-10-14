import { Application } from "express";


export function register(app: Application) {
  app.get('/', (req, res) => {
    res.json({ hello: 'Hello World' })
  })
}