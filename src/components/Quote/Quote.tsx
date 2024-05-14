import { useEffect, useState } from 'react';
import mockedQuote from './mockedQuote.json';

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

  return (
    <p>
      <q cite={`${QUOTABLE_URL}/${quote._id}`}>{quote.content}</q>-{' '}
      {quote.author}
    </p>
  );
};

export default Quote;
