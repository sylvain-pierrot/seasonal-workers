CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO "JobCategories" (category_title)
VALUES('Agriculture, Viticulture, Pêche'),
        ('Hôtellerie de plein air, Club vacances, Camping, Animation'),
        ('Hôtels, cafés, bars, restaurants'),
        ('Evenementiel'),
        ('Casinos, Parcs d''attraction'),
        ('Administration, Espaces culturels, Tourisme'),
        --('Zoo, Espaces de loisirs'),
        ('Montagne, Ski'),
        ('Mer, Plongée, Sports/Loisirs Nautiques'),
        --('Jardineries, Graineteries'),
        ('Sécurité, Gardiennage'),
        ('Logistique, Transport'),
        ('Baby sitting, Services à la personne'),
        ('Commerce, Achats, Vente'),
        ('SPA, Esthétique, Coiffure'),
        --('Arts, Festivals, Spectacles'),
        ('Autre') ON CONFLICT DO NOTHING;

-- Agriculture, Viticulture, Pêche (Catégorie 1) :
INSERT INTO "Jobs"(job_title,category) VALUES ('Ouvrier.e agricole',1), ('Chef.fe ouvrier.e agricole',1), ('Conduct.eur.rice d''engin agric
ole',1), ('Ouvrier.e horticole', 1), ('Paysagiste',1), ('Maraîcher.e', 1), ('Mécanicien.ne en matériel agricole', 1), ('Ouvrier.e forestier.e', 1
), ('Vétérinaire', 1), ('Marin-Pêcheur',1) ON CONFLICT DO NOTHING;

-- Hôtellerie de plein air, Club vacances, Camping, Animation (Catégorie 2) :
INSERT INTO "Jobs"(job_title,category) VALUES ('Animat.eur.rice petite enfance',2), ('Animat.eur.rice enfants',2), ('Responsable animation
enfants',2), ('Animat.eur.rice polyvalent',2), ('Responsable animation',2), ('Animat.eur.rice sportif',2), ('Animat.eur.rice professionnel',2), (
'Guide-accompagnateur',2), ('Directeur d''exploitation',2), ('Employé.e de parc de loisirs',2), ('Chorégraphe',2), ('Décorat.eur.rice',2), ('Tech
nicien.ne son et lumière',2), ('DJ',2) ON CONFLICT DO NOTHING;

-- Hôtels, cafés, bars, restaurants (Catégorie 3) :
INSERT INTO "Jobs"(job_title,category) VALUES('Direct.eur.rice d''hôtel',3), ('Assistant.e de direction',3), ('Responsable d''hébergement',
3), ('Chef.fe réception',3), ('Réceptionniste',3), ('Night Auditor',3),
('Chef.fe concierge',3), ('Concierge',3), ('Portier.e',3), ('Chasseur',3), ('Voiturier.e',3), ('Bagagiste',3), ('Guest relation',3), ('Majordome'
,3), ('Responsable blanchisserie/lingerie',3), ('Employé.e de blanchisserie/lingerie',3),
('Employé.e d''étages',3), ('Assistant.e gouvernant.e',3), ('Gouvernant.e',3), ('Gouvernant.e général.e',3), ('Employé.e polyvalent',3), ('Equipi
er.e',3),('Responsable de maintenance',3), ('Agent de maintenance',3), ('House keeping',3),
('Jardinier.e paysagiste',3), ('Manager F&B',3), ('Direct.eur.rice de restauration',3), ('Maitre.sse d''hôtel',3), ('Assistant.e Maitre.sse d''hô
tel',3),('Chef.fe de rang',3), ('Commis/Runner',3), ('Chef.fe sommelier',3), ('Sommelier',3),
('Limonadier',3), ('Chef.fe bar.wo.man',3), ('Bar.wo.man',3), ('Commis de Bar',3), ('Responsable Room Service',3), ('Room Service',3), ('Responsa
ble petit déjeuner',3), ('Hôte.sse d''accueil',3), ('Chef.fe de cuisine',3), ('Second de cuisine',3),
('Chef.fe de partie',3), ('Demi chef.fe de partie',3), ('Commis de cuisine plongeur',3), ('Boulanger.e',3), ('Chef.fe pâtissier.e',3), ('Second d
e pâtissier.e',3), ('Pâtissier.e',3), ('Chef.fe chocolatier',3), ('Chocolatier',3),
('Pizzaiolo',3), ('Crêpier.e',3), ('Glacier',3), ('Plagiste',3) ON CONFLICT DO NOTHING;

-- Evénementiel (Catégorie 4) :
INSERT INTO "Jobs"(job_title,category) VALUES('Direct.eur.rice de foire, salon, congrès, exposition', 4), ('Direct.eur.rice de cirque', 4),
 ('Direct.eur.rice d''agence évènementielle',4), ('Chef.fe de projet événementiel', 4), ('Chargé.e de communication événementielle',4), ('Organis
at.eur.rice de spectacles',4), ('Commissaire de salon/d''exposition', 4), ('Organisat.eur.rice de business event',4), ('Organisat.eur.rice d''évé
nements',4), ('Chef.fe de projet artistique et culturel',4), ('Organisat.eur.rice d''événements culturels et artistiques',4), ('Organisat.eur.ric
e d''événements sportifs',4), ('Direct.eur.rice de production événementielle',4), ('Médiat.eur.rice culturel',4), ('Direct.eur.rice de festival',
4), ('Photographe',4), ('Modèle Mannequinat',4), ('Hôte.sse',4) ON CONFLICT DO NOTHING;

-- Casinos, Parcs d'attraction (Catégorie 5) :
INSERT INTO "Jobs"(job_title,category) VALUES('Direct.eur.rice de parc zoologique',5), ('Vétérinaire',5), ('Chef.fe animalier',5), ('Soigna
nt.e animalier',5), ('Auxiliaire spécialisé vétérinaire',5), ('Jardinier',5), ('Eleveur animalier',5), ('Fauconnier',5),('Direct.eur.rice de parc
 d''attraction',5), ('Responsable d''un secteur d''attraction',5), ('Pilote d''attractions',5), ('Hôte.sse de salle de jeux électroniques',5), ('
Conduct.eur.rice de manège',5), ('Responsable des attractions',5), ('Opérat.eur.rice d''attraction',5), ('Hôte.sse de patinoire',5), ('Hôte.sse d
e manège',5), ('Employé.e de parc de loisirs',5), ('Ouvreu.r.se de salle de spectacles',5), ('Pilote de manège',5), ('Opérat.eur.rice de manège',
5), ('Ouvreu.r.se placeu.r.se de salle de spectacles',5), ('Employé.e de manège forain',5), ('Agent.e d''exploitation des attractions',5), ('Agen
t.e de contrôle de salle de spectacles',5), ('Assistant.e de zone d''attraction',5), ('Conduct.eur.rice d''attraction',5), ('Hôte.sse d''attracti
ons',5), ('Employé.e de loisirs ou d''attractions',5), ('Animat.eur.rice de parc de loisirs',5), ('Animat.eur.rice de personnage de parc de loisi
rs',5), ('Animat.eur.rice d''attractions',5), ('Opérat.eur.rice de parcours acrobatique dans les arbres',5), ('Hôte.sse de golf/mini-golf',5), ('
Billettiste',5), ('Direct.eur.rice de casino',5),  ('Chef.fe croupier.re',5), ('Croupier.re',5), ('Responsable clientèle',5), ('Agent de sécurité
',5), ('Opérat.eur.rice de vidéosurveillance',5), ('Banquier',5), ('Gestionnaire de fond',5), ('Technicien machine à sous',5), ('Contrôleur audit
eur de machines à sous',5) ON CONFLICT DO NOTHING;

-- Administration, Espaces culturels, Office du Tourisme (Catégorie 6) :
INSERT INTO "Jobs"(job_title,category) VALUES('Direct.eur.rice d''office de tourisme',6), ('Direct.eur.rice de site culturel', 6), ('Respon
sable de réservation', 6), ('Agent d''accueil',6), ('Agent polyvalent',6), ('Guide accompagnateur',6) ON CONFLICT DO NOTHING;

-- Montagne, Ski (Catégorie 7) :
INSERT INTO "Jobs"(job_title,category) VALUES('Chef.fe d''exploitation de remontée mécanique', 7), ('Electromécanicien.ne en remontée mécan
ique',7), ('Installateur en remontée mécanique',7), ('Conducteu.r.se de remontée mécanique',7), ('Caissier.e en remontée mécanique',7), ('Agent d
''accueil',7), ('Employé.e d''équipement de sports et de loisirs',7), ('Accompagnat.eur.rice en montagne',7), ('Moniteur.e de ski',7), ('Moniteur
.e de randonnée',7), ('Moniteur.e d''escalade',7), ('Moniteur.e de moto neige',7), ('Ski.wo.man',7), ('Conducteur d''engins de Damage',7), ('Perc
histe',7), ('Pisteu.r.se secouriste',7), ('Nivocult.eur.rice',7), ('Artificier.e',7), ('Maitre.sse chien d''avalanche',7) ON CONFLICT DO NOTHING;

-- Mer, Plongée, Sports/Loisirs Nautiques (Catégorie 8) :
INSERT INTO "Jobs"(job_title,category) VALUES('Plagiste',8), ('Vendeu.r.se ambulant.e de glace ou de beignets',8), ('Animat.eur.rice de clu
b de plage',8), ('Nageu.r.se sauveteur',8), ('Monit.eur.rice d''activités nautiques',8), ('Surveillant.e de baignade',8), ('Monit.eur.rice de plo
ngée',8), ('Employé.e de Capitainerie',8), ('Mécanicien.ne de bateaux',8), ('Equipage de bateaux',8) ON CONFLICT DO NOTHING;

-- Sécurité, Gardiennage (Catégorie 9):
INSERT INTO "Jobs"(job_title,category) VALUES('Garde rapprochée',9), ('Agent de sécurité',9), ('Opérat.eur.rice de vidéosurveillance',9), (
'Maitre.sse de chien',9), ('ASVP',9), ('Gardien.ne',9) ON CONFLICT DO NOTHING;

-- Logistique, Transport (Catégorie 10) :
INSERT INTO "Jobs"(job_title,category) VALUES('Magasinier.e',10), ('Chef magasinier',10), ('Préparat.eur.rice de commande',10), ('Cariste',
10), ('Manutentionnaire',10), ('Opérat.eur.rice',10), ('Chauffeur livreur',10), ('Chauffeur routier',10) ON CONFLICT DO NOTHING;

-- Babysitting, Services à la personne (Catégorie 11) :
INSERT INTO "Jobs"(job_title,category) VALUES('Garde d''enfants',11), ('Garde périscolaire',11), ('Aide aux devoirs',11), ('Animat.eur.rice
 d''anniversaire',11), ('Accompagnat.eur.rice de vacances',11), ('Aide à la personne',11), ('Livreur à domicile',11), ('Chauffeur VTC',11), ('Aid
e au ménage',11), ('Paysagiste jardinier arboriste',11) ON CONFLICT DO NOTHING;

-- Commerce, Achats, Vente (Catégorie 12) :
INSERT INTO "Jobs"(job_title,category) VALUES('Billettiste',12) , ('Responsable de réservation',12) , ('Responsable de vente',12) , ('Respo
nsable de magasin',12) , ('Assistant.e responsable magasin',12) , ('Vend.eur.se',12), ('Négociant.e', 12) ON CONFLICT DO NOTHING;

-- SPA, Esthétique, Coiffure (Catégorie 13) :
INSERT INTO "Jobs"(job_title,category) VALUES('SPA manager',13) , ('Praticien.ne SPA',13) , ('Hôte.sse d''accueil',13) , ('Esthéticien.ne',
13) , ('Maquilleu.r.se',13) , ('Métiers de l''onglerie',13) , ('Masseu.r.se',13) , ('Coiffeu.r.se',13) ON CONFLICT DO NOTHING;

-- Autres (Catégorie 14) :
INSERT INTO "Jobs"(job_title,category) VALUES('Autres métiers',14) ON CONFLICT DO NOTHING;