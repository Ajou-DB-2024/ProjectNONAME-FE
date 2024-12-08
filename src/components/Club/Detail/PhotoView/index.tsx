"use client";

import React, { useState } from "react";
import * as S from "./style";
import { IconChevronLeft, IconChevronRight, IconTrash } from "@tabler/icons-react";

type PhotoViewerProps = {
  images: string[];
  mode?: "view" | "edit";
  onDeleteImage?: (index: number) => void;
  onAddImage?: (file: File) => void;
};

const PhotoViewer: React.FC<PhotoViewerProps> = ({
  images,
  mode = "view",
  onDeleteImage,
  onAddImage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDelete = () => {
    if (onDeleteImage) {
      onDeleteImage(currentIndex);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && onAddImage) {
      onAddImage(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && onAddImage) {
      onAddImage(e.dataTransfer.files[0]);
    }
  };

  return (
    <S.Container>
      <S.ImageContainer>
        {mode === "edit" && (
          <S.DeleteButton onClick={handleDelete}>
            <IconTrash size="1.5em" />
          </S.DeleteButton>
        )}
        {images[currentIndex] && <S.Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />}
        <S.ChevronLeft onClick={handlePrev}>
          <IconChevronLeft size="2em" />
        </S.ChevronLeft>
        <S.ChevronRight onClick={handleNext}>
          <IconChevronRight size="2em" />
        </S.ChevronRight>
      </S.ImageContainer>
      <S.Pagination>
        <S.Slider position={(currentIndex / (images.length - 1)) * 100 || 0} />
      </S.Pagination>
      {mode === "edit" && (
        <S.UploadContainer
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <label htmlFor="image-upload">+ Add Photo</label>
          <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} />
        </S.UploadContainer>
      )}
    </S.Container>
  );
};

export default PhotoViewer;
