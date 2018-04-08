var Discord =  require ( ' discord.io ' );
var logger =  require ( ' winston ' );
var auth =  require ( ' ./auth.json ' );
// Configurer les paramètres du journal
enregistreur . supprimer ( enregistreur . transports . Console );
enregistreur . ajouter ( enregistreur . transports . Console , {
    coloriser :  vrai
});
enregistreur . level  =  ' debug ' ;
// Initialise Discord Bot
var bot =  nouveau  Discord.Client ({
   jeton :  auth . jeton ,
   autorun :  true
});
bot . on ( ' ready ' , function ( evt ) {
    enregistreur . info ( ' Connecté ' );
    enregistreur . info ( ' Connecté en tant que: ' );
    enregistreur . d' info ( bot . nom d' utilisateur  +  ' - ( '  +  bot . id  +  ' ) ' );
});
bot . on ( ' message ' , fonction ( utilisateur , userID , channelID , message , evt ) {
    // Notre bot a besoin de savoir s'il va exécuter une commande
    // Il va écouter les messages qui vont commencer par `!`
    if ( message .. substring ( 0 , 1 ) ==  ' ! ' ) {
        var args =  message . sous-chaîne ( 1 ). scission ( '  ' );
        var cmd = args [ 0 ];
       
        args =  args . épissure ( 1 );
        commutateur (cmd) {
            // ! ping
            cas  ' ping ' :
                bot . sendMessage ({
                    à : channelID,
                    message :  ' Pong! '
                });
            rompre ;
            // Ajoutez simplement toutes les commandes de cas si vous voulez ..
         }
     }
});
