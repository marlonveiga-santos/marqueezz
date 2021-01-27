import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import { QuizContainer } from '.';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';

export default function Quiz() {
  const { name } = useRouter().query;
  return (
    <QuizBackground backgroundImage={db.bg}>
      <h1>
        Olá
        {name}
      </h1>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content />
        </Widget>
        <Widget />
        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
}
