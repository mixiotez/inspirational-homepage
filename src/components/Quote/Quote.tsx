import { useEffect, useState } from 'react';
import mockedQuote from './mockedQuote.json';
import { QuoteContainer } from './QuoteContainer';

const QUOTABLE_URL = 'https://api.quotable.io/quotes';
const RANDOM_QUOTE_URL = QUOTABLE_URL + '/random?tags=inspirational';

type QuoteData = typeof mockedQuote;
type QuoteResponse = QuoteData[];

const Quote: React.FC = () => {
  const [quote, setQuote] = useState<QuoteData>();

  useEffect(() => {
    const fetchQuote = async () => {
      const response: Response = await fetch(RANDOM_QUOTE_URL);

      return (await response.json()) as Promise<QuoteResponse>;
    };

    fetchQuote()
      .then((data) => {
        setQuote(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!quote) return <></>;

  const citeUrl = `${QUOTABLE_URL}/${quote._id}`;

  return (
    <QuoteContainer>
      <q cite={citeUrl}>{quote.content}</q>- {quote.author}
    </QuoteContainer>
  );
};

export default Quote;
