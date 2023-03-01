-- CreateTable
CREATE TABLE "fashion_test.question" (
    "id" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "fashion_test.answer" (
    "question_id" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "value" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "fashion_test.question_id_key" ON "fashion_test.question"("id");

-- CreateIndex
CREATE UNIQUE INDEX "fashion_test.question_id_sequence_key" ON "fashion_test.question"("id", "sequence");

-- CreateIndex
CREATE UNIQUE INDEX "fashion_test.answer_text_key" ON "fashion_test.answer"("text");

-- CreateIndex
CREATE UNIQUE INDEX "fashion_test.answer_question_id_sequence_key" ON "fashion_test.answer"("question_id", "sequence");

-- AddForeignKey
ALTER TABLE "fashion_test.answer" ADD CONSTRAINT "fashion_test.answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "fashion_test.question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
