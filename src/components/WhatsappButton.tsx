import { MessageCircle } from 'lucide-react';

const WhatsappButton = () => {
    return (
        <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        >
            <MessageCircle size={24} />
        </a>
    );
};

export default WhatsappButton;
