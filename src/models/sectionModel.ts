import mongoose, { Document } from 'mongoose';

interface Section extends Document {
  type: string;
  content: any;
  title: string;
  order: number;
}

const sectionSchema = new mongoose.Schema<Section>({
  type: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed, required: true },
  order: { type: Number, required: true },
});

export const SectionModel = mongoose.model<Section>('Section', sectionSchema);
