function _lib(sSelektor)
{
    this.selektor = sSelektor;
    this.el = document.querySelector(this.selektor); 




    _lib.prototype.ubaciElement = function(sNaziv,sKlasa,sIdent,sTekst)
    {
        if(sNaziv == "")
        {
            console.log("Nema naziv");
        }
        else
        {
            var a = document.createElement(sNaziv);
            if(sKlasa != "")
            {
                a.setAttribute("class",sKlasa);
            }
            if(sIdent != "")
            {
                a.setAttribute("id",sIdent);
            }
            if(sTekst != "")
            {
                a.innerHTML = sTekst;
            }

            this.el.appendChild(a);
        }
    }

    _lib.prototype.dodajKlasu = function(sKlasa)
    {
        this.el.setAttribute("class",sKlasa);
    }
    _lib.prototype.dodajAtribut = function(sNaziv,sVrijednost)
    {
        this.el.setAttribute(sNaziv,sVrijednost);
    }
    _lib.prototype.prikazi = function()
    {
        this.el.style.visibility = "visible"
    }
    _lib.prototype.sakrij = function()
    {
        this.el.style.visibility = "hidden"
    }
    _lib.prototype.dodajHref = function(tekst,sVrijednost)
    {
        this.el.setAttribute(tekst,sVrijednost);
    }
    



}


