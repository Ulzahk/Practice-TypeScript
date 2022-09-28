import { Product } from './product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
};

type pickExample = Pick<Product, 'color' | 'description'>

export interface UpdateProductDto extends Partial<CreateProductDto> { }

type requiredExample = Required<Product>;

type readonlyExample = Readonly<Product>

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}