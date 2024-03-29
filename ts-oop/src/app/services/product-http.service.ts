import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dtos";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: string, changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }

  async findOne(id: string): Promise<Product | undefined> {
    const { data } = await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }
}