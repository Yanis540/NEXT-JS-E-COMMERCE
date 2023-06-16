CREATE TABLE Fourniture (
    id_fournisseur BIGINT FOREIGN KEY Fournisseur(id), 
    id_produit BIGINT FOREIGN KEY Produit(id),

    constraint pk_fourniture 
        PRIMARY KEY (id_fournisseur,id_produit)
    
    
)
