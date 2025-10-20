import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    entityType: {
      type: String,
      enum: ["organization", "investment", "solo-investor"],
      trim: true,
      lowercase: true,
    },
    question: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    versionKey: false, // Removes __v field
  }
);

// Index for better query performance
userSchema.index({ email: 1 });
userSchema.index({ phone: 1 });

// Pre-save middleware to ensure data consistency
userSchema.pre("save", function (next) {
  // Remove any extra spaces
  this.name = this.name.trim();
  this.email = this.email.trim().toLowerCase();
  this.phone = this.phone.trim();
  if (this.entityType) {
    this.entityType = this.entityType.trim().toLowerCase();
  }
  next();
});

// Instance method to get user info without sensitive data
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  return {
    _id: userObject._id,
    name: userObject.name,
    email: userObject.email,
    phone: userObject.phone,
    entityType: userObject.entityType,
    question: userObject.question,
    createdAt: userObject.createdAt,
    updatedAt: userObject.updatedAt,
  };
};

const User = mongoose.model("User", userSchema);

export default User;
