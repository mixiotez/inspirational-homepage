import { useEffect, useState } from 'react';
import mockedQuote from './mockedQuote.json';
import { QuoteContainer } from './QuoteContainer';
import { FetchStatus } from '../common/types';

const QUOTABLE_URL = 'https://api.quotable.io/quotes';
const RANDOM_QUOTE_URL =
  QUOTABLE_URL + '/random?tags=inspirational&maxLength=140';

type QuoteData = typeof mockedQuote;
type QuoteResponse = QuoteData[];

const Quote: React.FC = () => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('loading');
  const [quote, setQuote] = useState<QuoteData>();

  useEffect(() => {
    const fetchQuote = async () => {
      setFetchStatus('loading');
      const response: Response = await fetch(RANDOM_QUOTE_URL);

      return (await response.json()) as Promise<QuoteResponse>;
    };

    fetchQuote()
      .then((data) => {
        setFetchStatus('successful');
        setQuote(data[0]);
      })
      .catch((error) => {
        setFetchStatus('error');
        console.error(error);
      });
  }, []);

  if (fetchStatus !== 'successful' || !quote) return <></>;

  const citeUrl = `${QUOTABLE_URL}/${quote._id}`;

  return (
    <QuoteContainer>
      <q cite={citeUrl}>{quote.content}</q>- {quote.author}
    </QuoteContainer>
  );
};

export default Quote;
