/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component

}
  export interface Product {
    id: number
    name: string
    price: number
    description?: string
    image: string
    category: string
    stock: number
    status: 'on' | 'off' // on: 上架, off: 下架
    createdAt?: string
    updatedAt?: string
  }