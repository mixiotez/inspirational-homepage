import { useEffect, useState } from 'react';
import mockedQuote from './mockedQuote.json';
import { QuoteContainer } from './QuoteContainer';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { FetchStatus } from '../common/types';
import { useNotifications } from '../hooks/useNotifications';
import { QUOTE_ERROR } from '../common/errors';

const QUOTABLE_URL = 'https://api.quotable.io/quotes';
const RANDOM_QUOTE_URL =
  QUOTABLE_URL + '/random?tags=inspirational&maxLength=140';

type QuoteData = typeof mockedQuote;
type QuoteResponse = QuoteData[];

const Quote: React.FC = () => {
  const { addNotification } = useNotifications();
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>('loading');
  const [quote, setQuote] = useState<QuoteData>();

  useEffect(() => {
    let ignore = false;

    const fetchQuote = async () => {
      setFetchStatus('loading');
      const response: Response = await fetch(RANDOM_QUOTE_URL);

      return (await response.json()) as Promise<QuoteResponse>;
    };

    fetchQuote()
      .then((data) => {
        if (ignore) return;

        setFetchStatus('successful');
        setQuote(data[0]);
      })
      .catch((error) => {
        if (ignore) return;

        console.error(error);
        setFetchStatus('error');
        addNotification(QUOTE_ERROR);
      });

    return () => {
      ignore = true;
    };
  }, [addNotification]);

  if (fetchStatus === 'error' || !quote) return <></>;

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
