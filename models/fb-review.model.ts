import {Document, Schema as MongooseSchema} from 'mongoose/lib';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ObjectType, Field} from '@nestjs/graphql';
import mongoose from 'mongoose';

export interface IReview extends Document {
  _id: MongooseSchema.Types.ObjectId;
  createdAt: Date;
  review: string;
}

@ObjectType()
@Schema()
export class FbReview implements IReview {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => Date)
  @Prop()
  createdAt: Date;

  @Field(() => String)
  @Prop()
  review: string;
}

export type FbReviewDocument = FbReview & Document;
export const FbReviewSchema = SchemaFactory.createForClass(FbReview);
export const FbReviewModel = mongoose.model('FbReview', FbReviewSchema);
