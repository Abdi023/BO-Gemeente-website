const mongoose = require('mongoose');
const slugify = require('slugify');

const mensenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: true,
      trim: true,
    },
    slug: String,
    summary: {
      type: String,
      trim: true,
      required: [true, 'A product must have a summary'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A product must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

mensenSchema.index({ slug: 1 });

mensenSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

mensenSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const Mensen = mongoose.model('Mensen', mensenSchema);

module.exports = Mensen;
