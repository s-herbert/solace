interface ErrorStateProps {
  message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => (
  <div className="text-center p-8">
    <p className="text-red-600">Error: {message}</p>
  </div>
);

export default ErrorState;
