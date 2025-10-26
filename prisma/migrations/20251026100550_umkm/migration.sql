/*
  Warnings:

  - You are about to alter the column `category` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `lokasi` VARCHAR(191) NULL,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `image` VARCHAR(191) NULL,
    MODIFY `video` VARCHAR(191) NULL,
    MODIFY `category` ENUM('KULINER', 'SOUVENIR', 'FASHION') NOT NULL;
