import {Document, Schema as MongooseSchema} from 'mongoose/lib';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ObjectType, Field} from '@nestjs/graphql';
import mongoose from 'mongoose';

export interface IPost extends Document {
  _id: MongooseSchema.Types.ObjectId;
  createdAt: Date;
  message: string;
}

@ObjectType()
@Schema()
export class FbPost implements IPost {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => Date)
  @Prop()
  createdAt: Date;

  @Field(() => String)
  @Prop()
  message: string;
}

export type FbPostDocument = FbPost & Document;
export const FbPostSchema = SchemaFactory.createForClass(FbPost);
export const FbPostModel = mongoose.model('FbPost', FbPostSchema);
