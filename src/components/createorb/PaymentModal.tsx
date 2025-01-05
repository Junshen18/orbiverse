type PaymentModalProps = {
  status: 'success' | 'error';
  message: string;
  orb?: {
    name: string;
    preview: string;
    walletAddress: string;
  };
  onClose: () => void;
};

export function PaymentModal({ status, message, orb, onClose }: PaymentModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-darkpurple border border-white/10 rounded-2xl max-w-96 p-6">
        <div className="flex flex-col items-center text-center">
          {status === 'success' ? (
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-3xl">✓</span>
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
              <span className="text-3xl">×</span>
            </div>
          )}

          <h2 className="text-2xl font-bold mb-2">
            {status === 'success' ? 'Payment Successful' : 'Payment Failed'}
          </h2>
          <p className="text-white/70 mb-4">{message}</p>

          {status === 'success' && orb && (
            <div className="w-full bg-white/5 rounded-lg p-4 mb-4">
              <div className="aspect-square w-32 mx-auto mb-4 relative overflow-hidden rounded-full">
                <img
                  src={orb.preview}
                  alt={orb.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">{orb.name}</h3>
              <p className="text-xs text-white/50 break-all">
                Minted to: 
              </p>
              <p className="text-xs text-white/50 break-all overflow-clip">
                {orb.walletAddress}
              </p>
            </div>
          )}

          <button
            onClick={onClose}
            className={`px-8 py-2 rounded-full ${
              status === 'success'
                ? 'bg-green-500/10 hover:bg-green-500/20 text-green-400'
                : 'bg-red-500/10 hover:bg-red-500/20 text-red-400'
            }`}
          >
            {status === 'success' ? 'View in Dashboard' : 'Try Again'}
          </button>
        </div>
      </div>
    </div>
  );
} 