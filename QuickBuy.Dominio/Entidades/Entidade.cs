using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        protected List<string> MensagemValidacao { get; set; }

        // Metodos *****
        public abstract void Validate();

        protected   void LimparMensagemValidacao()
        {
            MensagemValidacao.Clear();
        }

        protected void AdicionarMensagem(string mensagem)
        {
            MensagemValidacao.Add(mensagem);
        }

        protected bool EhValido
        {
            get { return !MensagemValidacao.Any(); }
        }
    }
}
