namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (Preco <= 0)
                AdicionarMensagem("Informe um Preço valido para o Produto");

            if (string.IsNullOrEmpty(Nome))
                AdicionarMensagem("Nome é de preenchimento obrigatório");
        }
    }
}
