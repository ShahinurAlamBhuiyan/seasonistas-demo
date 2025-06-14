import { Button } from "~/components/Button/Button";
import { Input, TextArea } from "~/components/Input/Input";
import { StepProps } from "./common";
import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";

type QuestionEntry = {
  id: number;
  question: string;
};

function QuestionsForm({ qsBank }: Pick<StepProps, "qsBank">) {
  const t = useTranslations("createJob");
  const [questions, setQuestions] = useState<QuestionEntry[]>([
    { id: 1, question: "" },
  ]);

  useEffect(() => {
    qsBank.set(questions);
  }, [questions, qsBank]);

  const addQuestion = (initVal?: string) => {
    setQuestions([
      ...questions,
      { id: questions.length + 1, question: initVal || "" },
    ]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleQuestionChange = (id: number, value: string) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, question: value } : q
    );
    setQuestions(updatedQuestions);
  };

  return (
    <>
      <div>
        <h2 className="text-xl mb-4">{t("addQuestionsForApplicants")}</h2>
        {questions.map((q, index) => (
          <div key={q.id} className="flex gap-4 mb-4">
            <div className="flex-1">
              <Input
                className="w-full"
                placeholder={`${t("question")} ${index + 1}`}
                value={q.question}
                onChange={(e) => handleQuestionChange(q.id, e.target.value)}
              />
            </div>
            <Button
              tabIndex={-1}
              variant="filled"
              onClick={() => removeQuestion(q.id)}
            >
              Remove
            </Button>
          </div>
        ))}

        <Button onClick={() => addQuestion()}>{t("addAnotherQuestion")}</Button>
      </div>
      <div>
        <h1 className="font-bold text-lg">Question Presents</h1>
        <h1 className="text-sm mt-1">(Click to add question)</h1>
        <div className="space-y-2 mt-3">
          {sampleQuestions.map((q) => (
            <button
              key={q}
              className="block bg-teal text-white px-2 py-1 rounded-md"
              onClick={() => addQuestion(q)}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export function QuestionsStep({
  onNext,
  onCancel,
  progressView,
  qsBank,
}: StepProps) {
  const t = useTranslations("createJob");

  return (
    <>
      <h1 className="font-semibold text-2xl text-center md:text-left">
        {t("employeeQuestions")}
      </h1>

      {progressView}

      <div className="bg-teal/5 p-7 mt-7 rounded-xl space-y-6">
        <QuestionsForm qsBank={qsBank} />

        <div className="pt-6">
          <div className="flex gap-x-3">
            <Button onClick={onCancel} variant="outlined" fullRounded>
              {t("back")}
            </Button>
            <Button onClick={onNext} fullRounded>
              {t("next")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

const sampleQuestions = [
  "Tell me a little about yourself.",
  "Why do you want to work for our company?",
  "What are your greatest professional achievements?",
  "What are your weaknesses, and how do you manage them?",
  "What skills do you think are essential for succeeding in this role?",
  "How do you handle stress and pressure?",
  "Tell us about a time when you worked with a team to achieve a goal. What was your role, and what was the outcome?",
  "How do you deal with failure or mistakes at work?",
  "Where do you see yourself professionally in the next 5 years?",
  "What are your expectations from an employer in terms of support and career development?",
];
