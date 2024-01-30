import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');

  await productRepo.insert([
    {
      id: '1c81cde1-50d4-4a64-bd9c-5c64648e77a0',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      image_url: 'https://example.com/products/1.jpng',
    },
    {
      id: '682f4314-5a1e-4ba0-97a9-7edf3006ac34',
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      image_url: 'https://example.com/products/2.jpng',
    },
    {
      id: 'faa0f690-b0a2-47d4-967a-93fba29ec1d9',
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      image_url: 'https://example.com/products/3.jpng',
    },
    {
      id: 'c6714a2b-065e-4d09-9e2e-9c0c75a474f1',
      name: 'Product 4',
      description: 'Description 4',
      price: 400,
      image_url: 'https://example.com/products/4.jpng',
    },
    {
      id: '417f44c2-7269-4e27-95d8-8f2a1e956c82',
      name: 'Product 5',
      description: 'Description 5',
      price: 500,
      image_url: 'https://example.com/products/5.jpng',
    },
    {
      id: 'b60634a1-76a0-41bf-8e87-b1c5b4e1f4c3',
      name: 'Product 6',
      description: 'Description 6',
      price: 600,
      image_url: 'https://example.com/products/6.jpng',
    },
    {
      id: 'a39060d0-53c5-45f5-b964-64de981e4d54',
      name: 'Product 7',
      description: 'Description 7',
      price: 700,
      image_url: 'https://example.com/products/7.jpng',
    },
    {
      id: '1882cf5e-e5aa-44a2-8e2a-14a1b8e7d3d3',
      name: 'Product 8',
      description: 'Description 8',
      price: 800,
      image_url: 'https://example.com/products/8.jpng',
    },
    {
      id: '4b1c6bf8-77e4-4e19-bf0d-8f09f3b33c2e',
      name: 'Product 9',
      description: 'Description 9',
      price: 900,
      image_url: 'https://example.com/products/9.jpng',
    },
    {
      id: '8b9aa330-964f-4aa7-91c4-c883d01e3d57',
      name: 'Product 10',
      description: 'Description 10',
      price: 1000,
      image_url: 'https://example.com/products/10.png',
    },
    {
      id: 'a34db70b-049b-45c6-8a7c-5f5a7cb43a95',
      name: 'Product 11',
      description: 'Description 11',
      price: 1100,
      image_url: 'https://example.com/products/11.png',
    },
    {
      id: 'd195d3b4-ec6e-45d7-b48c-0ed0fc8d843c',
      name: 'Product 12',
      description: 'Description 12',
      price: 1200,
      image_url: 'https://example.com/products/12.png',
    },
    {
      id: '89a429c0-8b15-4db0-a68e-eb720d31418c',
      name: 'Product 13',
      description: 'Description 13',
      price: 1300,
      image_url: 'https://example.com/products/13.png',
    },
    {
      id: '9a8a793a-1a2c-4ef5-bf95-71db090653d6',
      name: 'Product 14',
      description: 'Description 14',
      price: 1400,
      image_url: 'https://example.com/products/14.png',
    },
    {
      id: '9e88b723-0a4d-4841-b94b-e4ee6fe6c33c',
      name: 'Product 15',
      description: 'Description 15',
      price: 1500,
      image_url: 'https://example.com/products/15.png',
    },
    {
      id: 'e772e4b1-064a-4530-9534-9cb990c90bd9',
      name: 'Product 16',
      description: 'Description 16',
      price: 1600,
      image_url: 'https://example.com/products/16.png',
    },
    {
      id: '4645959e-4a77-430e-b1b6-0b4952bf789d',
      name: 'Product 17',
      description: 'Description 17',
      price: 1700,
      image_url: 'https://example.com/products/17.png',
    },
    {
      id: '1eadeafd-7021-47f9-8e82-3c5a6f56ac90',
      name: 'Product 18',
      description: 'Description 18',
      price: 1800,
      image_url: 'https://example.com/products/18.png',
    },
    {
      id: '6a0bbf13-d255-4702-b5b1-df0592a14052',
      name: 'Product 19',
      description: 'Description 19',
      price: 1900,
      image_url: 'https://example.com/products/19.png',
    },
    {
      id: 'a9e6e346-9bd3-4c04-bb44-3bbda1349e16',
      name: 'Product 20',
      description: 'Description 20',
      price: 2000,
      image_url: 'https://example.com/products/20.png',
    },
  ]);

  await app.close();
}
bootstrap();
