<script type="text/javascript">
        const elemento_botao = document.getElementById('botao');
        
        function botaoFoiClicado(){
            alert("O botão foi clicado!")
            window.location.href = ("http://www.google.com")
        }

        elemento_botao.addEventListener("click", botaoFoiClicado)
        elemento_botao.innerText = "Clique aqui"
    </script>    