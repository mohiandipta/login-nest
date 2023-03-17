import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';



@Controller('products')
export class ProductsController {

    @Get()
    findAll(
        @Req()
        request: Request,
        @Res()
        response: Response
    ): object {
        console.log(request)
        return response.json({
            statusCode: 202,
            status: 'success',
            data: DummyData
        })
    }
}






let DummyData = {
    "product_name": "Luminous Glow Moisturizer",
    "brand": "Radiant Beauty",
    "price": 29.99,
    "description": "Get a luminous and radiant complexion with our Glow Moisturizer.",
    "ingredients": [
        "Water",
        "Glycerin",
        "Butylene Glycol",
        "Squalane",
        "Dimethicone"
    ],
    "size": "1.7 oz",
    "usage_instructions": "Apply to clean, dry skin in the morning and evening.",
    "made_in": "USA",
    "seller": {
        "name": "Radiant Beauty",
        "email": "customerservice@radiantbeauty.com",
        "phone": "+1-800-555-1234",
        "address": {
            "street": "123 Main St",
            "city": "New York",
            "state": "NY",
            "zip": "10001",
            "country": "USA"
        }
    }
}
