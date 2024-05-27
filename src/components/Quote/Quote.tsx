import { useEffect, useState } from 'react';
import mockedQuote from './mockedQuote.json';
import { QuoteContainer } from './QuoteContainer';
import ScaleLoader from 'react-spinners/ScaleLoader';
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

  const citeUrl = `${QUOTABLE_URL}/${quote?._id}`;

  return (
    <QuoteContainer>
      {fetchStatus === 'successful' && quote && (
        <>
          <q cite={citeUrl}>{quote.content}</q>- {quote.author}
        </>
      )}
      {fetchStatus === 'loading' && (
        <ScaleLoader
          loading
          height={55}
          margin={4}
          aria-label="Loading Spinner"
          color="rgba(15,15,15, 0.75)"
        />
      )}
    </QuoteContainer>
  );
};

export default Quote;
