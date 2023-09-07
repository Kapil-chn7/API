-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "completed" BOOLEAN DEFAULT false,
    "dateofcompletion" DATE,
    "dateofcreation" DATE DEFAULT CURRENT_TIMESTAMP,
    "imagelink" VARCHAR(255),
    "createdby" VARCHAR(255) DEFAULT 'noname given',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
