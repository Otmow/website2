import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Paperclip, Bot, User, FileText } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
  file?: string;
};

const INITIAL_MESSAGE: Message = {
  id: "1",
  text: "Olá! Sou o assistente virtual da Ótmow. Como posso ajudar com sua antecipação ou análise de documentos?",
  sender: "bot",
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const simulateBotResponse = (userMessage: string, isFile = false) => {
    setIsTyping(true);
    setTimeout(() => {
      let botText =
        "Entendi. Um dos nossos especialistas vai analisar sua solicitação e entrar em contato em breve.";

      if (isFile) {
        botText =
          "Recebi o seu documento. Ele já foi enviado para a nossa equipe de análise. Em breve você terá o retorno sobre as condições!";
      } else if (
        userMessage.toLowerCase().includes("taxa") ||
        userMessage.toLowerCase().includes("juros")
      ) {
        botText =
          "Nossas taxas variam de acordo com o prazo e a análise de crédito. Você pode usar o simulador no site para ter uma estimativa!";
      } else if (
        userMessage.toLowerCase().includes("prazo") ||
        userMessage.toLowerCase().includes("tempo")
      ) {
        botText =
          "A liberação dos recursos ocorre em até 48 horas após a assinatura do contrato. É bem rápido!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: botText,
          sender: "bot",
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newMsg = inputValue.trim();
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: newMsg, sender: "user" }]);
    setInputValue("");
    simulateBotResponse(newMsg);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: `Arquivo enviado: ${file.name}`,
        sender: "user",
        file: file.name,
      },
    ]);
    simulateBotResponse(file.name, true);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#3674EF] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#2f63d6] ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="size-6" />
        {/* Bolinha de notificação */}
        <span className="absolute right-3 top-3 size-2.5 animate-pulse rounded-full bg-[#4EB7FF] ring-2 ring-[#3674EF]"></span>
      </button>

      {/* Janela de Chat */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#060d1f] shadow-2xl transition-all duration-300 sm:w-[380px] origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#081127] p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#3674EF]/20 text-[#4EB7FF]">
              <Bot className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-white">Assistente Ótmow</h3>
              <p className="flex items-center gap-1.5 text-xs text-[#4EB7FF]">
                <span className="size-1.5 rounded-full bg-[#4EB7FF]"></span> Online
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex h-[400px] flex-col gap-4 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`relative max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "rounded-br-sm bg-[#3674EF] text-white"
                    : "rounded-bl-sm border border-white/10 bg-white/5 text-slate-200"
                }`}
              >
                {msg.file ? (
                  <div className="flex items-center gap-2">
                    <FileText className="size-4 opacity-80" />
                    <span className="font-medium underline decoration-white/30 underline-offset-2">
                      {msg.text}
                    </span>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex w-full justify-start">
              <div className="flex max-w-[85%] items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-4 py-3.5">
                <span className="size-1.5 animate-bounce rounded-full bg-[#4EB7FF]"></span>
                <span className="size-1.5 animate-bounce rounded-full bg-[#4EB7FF] [animation-delay:0.2s]"></span>
                <span className="size-1.5 animate-bounce rounded-full bg-[#4EB7FF] [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 bg-[#081127] p-3">
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-[#060d1f] p-1 pr-2 transition-colors focus-within:border-[#4EB7FF]/50"
          >
            {/* File Upload Button */}
            <label className="flex size-9 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-[#4EB7FF]">
              <Paperclip className="size-4" />
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </label>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-transparent px-2 text-sm text-white placeholder-slate-500 outline-none"
            />

            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="flex size-9 items-center justify-center rounded-full bg-[#3674EF] text-white transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send className="size-4 -translate-x-px translate-y-px" />
            </button>
          </form>
          <div className="mt-2 text-center text-[10px] text-slate-500">
            Respostas geradas automaticamente para simulação.
          </div>
        </div>
      </div>
    </>
  );
}
