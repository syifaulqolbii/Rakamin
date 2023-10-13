--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    title character varying(255),
    genres character varying(255),
    year character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movies_id_seq OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    gender character varying(255),
    password character varying(255),
    role character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20231012102604-create-movies.js
20231013125555-create-users.js
\.


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (id, title, genres, year, "createdAt", "updatedAt") FROM stdin;
100	Outlaw Josey Wales, The	Action|Adventure|Drama|Thriller|Western	2006	\N	\N
1	Reckless	Comedy|Drama|Romance	2001	\N	\N
2	When a Man Loves a Woman	Drama|Romance	1995	\N	\N
3	Creature	Documentary	1997	\N	\N
4	Sex and Zen (Rou pu Tuan zhi tou Qing bao Jian)	Action|Adventure|Comedy|Fantasy	2007	\N	\N
5	Des roses en hiver	Drama	2007	\N	\N
6	The Magical Legend of the Leprechauns	Adventure|Children|Comedy|Fantasy|Romance	2010	\N	\N
7	Marilena de la P7	Drama|Fantasy	1984	\N	\N
8	Battle of Algiers, The (La battaglia di Algeri)	Drama|War	2012	\N	\N
9	Winning of Barbara Worth, The	Drama|Romance|Western	2009	\N	\N
10	Beijing Taxi	Documentary	1993	\N	\N
11	Pleasure at Her Majesty's	Comedy|Documentary	2009	\N	\N
12	Gang Related	Crime	1993	\N	\N
13	Bird of Paradise	Adventure|Drama|Romance	1990	\N	\N
14	Man Behind the Gun, The	Western	1993	\N	\N
15	William S. Burroughs: A Man Within	Documentary	1995	\N	\N
16	Half a Loaf of Kung Fu (Dian zhi gong fu gan chian chan)	Action|Comedy	2006	\N	\N
17	Otaku	Documentary	2004	\N	\N
18	Repeaters 	Action|Drama	2009	\N	\N
19	Party Monster	Documentary	2007	\N	\N
20	Two Days, One Night (Deux jours, une nuit)	Drama	2009	\N	\N
21	To Be or Not to Be	Comedy|Drama|War	2011	\N	\N
22	Good Student, The (Mr. Gibb)	Comedy	1986	\N	\N
23	Synth Britannia	Documentary	1995	\N	\N
24	Skenbart: En film om tåg	Comedy	1993	\N	\N
25	The Improv: 50 Years Behind the Brick Wall	Comedy|Documentary	2007	\N	\N
26	Naan Kadavul	Action|Drama|Mystery	2011	\N	\N
27	Fitzcarraldo	Adventure|Drama	2004	\N	\N
28	Liam	Drama	2010	\N	\N
29	You, Me and Dupree	Comedy	2012	\N	\N
30	Monkey Business	Comedy	2012	\N	\N
31	Run Sister Run!	Drama	2006	\N	\N
32	Police Story (Ging chaat goo si)	Action|Comedy|Crime|Thriller	1991	\N	\N
33	Come Drink with Me (Da zui xia)	Action|Adventure|Crime	2006	\N	\N
34	Libre échange	Comedy	2009	\N	\N
35	Little Monsters	Comedy	2005	\N	\N
36	Hunter, The	Action|Thriller	2009	\N	\N
37	Bite the Bullet	Action|Adventure|Western	1994	\N	\N
38	Praying with Lior	Documentary	2008	\N	\N
39	State Fair	Comedy|Drama|Romance	1997	\N	\N
40	Ursul	Comedy|Drama	1996	\N	\N
41	In Fear	Thriller	2000	\N	\N
42	Hamlet	Drama	2009	\N	\N
43	Lights Out	Drama|Mystery|Thriller	2001	\N	\N
44	Tommy	Drama|Musical	2001	\N	\N
45	61*	Drama	2010	\N	\N
46	Black Sunday (La maschera del demonio)	Horror	2003	\N	\N
47	Run Sister Run!	Drama	2003	\N	\N
48	Atomic States of America, The	Documentary	1992	\N	\N
49	2046	Drama|Fantasy|Romance|Sci-Fi	2006	\N	\N
50	Piano in a Factory, The (Gang de qin)	Comedy|Drama|Musical	2005	\N	\N
51	Marc Maron: Thinky Pain	Comedy	1995	\N	\N
52	Year Zero: The Silent Death of Cambodia	Documentary	2005	\N	\N
53	Valley of the Bees (Údolí vcel)	Drama	1994	\N	\N
54	Spider-Man 2	Action|Adventure|Sci-Fi|IMAX	2006	\N	\N
55	Sin Retorno	Drama|Thriller	2005	\N	\N
56	Harder They Fall, The	Drama|Film-Noir	1990	\N	\N
57	Ingrid	Drama	1994	\N	\N
58	While You Were Sleeping	Comedy|Romance	1990	\N	\N
59	Experimenter	Drama	1992	\N	\N
60	Or (a.k.a. My Treasure)	Drama	1997	\N	\N
61	Perfume	Comedy|Drama	1989	\N	\N
62	Wonder Boys	Comedy|Drama	1998	\N	\N
63	Young Törless, The (Junge Törless, Der)	Drama	1983	\N	\N
64	Conversation Piece (Gruppo di famiglia in un interno)	Drama	2010	\N	\N
65	Clean and Sober	Drama	2004	\N	\N
66	Michael Jackson's This Is It	Documentary|Musical|IMAX	1999	\N	\N
67	Napoleon and Samantha	Adventure|Drama	2000	\N	\N
68	Last Real Men, The (Die letzten Männer)	Documentary	2003	\N	\N
69	B. Monkey	Crime|Romance|Thriller	2000	\N	\N
70	Everything or Nothing: The Untold Story of 007	Documentary	2009	\N	\N
71	Operation Crossbow	Action|Adventure|War	2004	\N	\N
72	Tere Naam	Romance	2003	\N	\N
73	Jay And Silent Bob's Super Groovy Cartoon Movie	(no genres listed)	1989	\N	\N
74	Sex and Zen (Rou pu Tuan zhi tou Qing bao Jian)	Action|Adventure|Comedy|Fantasy	2009	\N	\N
75	Korso	Drama	2007	\N	\N
76	Booty Call	Comedy|Romance	2007	\N	\N
77	In the Mirror of Maya Deren (Im Spiegel der Maya Deren)	Documentary	2012	\N	\N
78	Maid to Order	Comedy|Fantasy	1995	\N	\N
79	Alice (Neco z Alenky)	Animation|Fantasy|Mystery	2011	\N	\N
80	Zotz!	Comedy|Fantasy|Horror	2007	\N	\N
81	Hero (Ying xiong)	Action|Adventure|Drama	2012	\N	\N
82	Bed & Board (Domicile conjugal)	Comedy|Drama	1999	\N	\N
83	Nature of the Beast, The	Crime|Horror|Mystery|Thriller	1986	\N	\N
84	Odgrobadogroba	Comedy|Drama	1997	\N	\N
85	Teen Spirit	Comedy	2006	\N	\N
86	Ghost of Frankenstein, The	Horror	2013	\N	\N
87	Wadjda	Drama	2002	\N	\N
88	Blackout	Action|Thriller	1996	\N	\N
89	Secret of Moonacre, The	Adventure|Fantasy|Romance	2008	\N	\N
90	Mean Guns	Action|Crime|Thriller	1986	\N	\N
91	Pillow Talk	Comedy|Musical|Romance	1999	\N	\N
92	Fur: An Imaginary Portrait of Diane Arbus	Drama|Fantasy|Romance	2010	\N	\N
93	Lonely Guy, The	Comedy	2008	\N	\N
94	Heavy Metal	Action|Adventure|Animation|Horror|Sci-Fi	2007	\N	\N
95	Bride Wars	Comedy|Romance	1989	\N	\N
96	In Your Hands	Drama	2002	\N	\N
97	Lucky Jordan	Comedy|Crime|Drama	2012	\N	\N
98	Mostly Martha (Bella Martha)	Comedy|Drama|Romance	2002	\N	\N
99	Quebrando o Tabu	Documentary	2011	\N	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, gender, password, role, "createdAt", "updatedAt") FROM stdin;
1	oainger0@craigslist.org	Female	KcAk6Mrg7DRM	Construction Worker	\N	\N
2	hblything1@de.vu	Female	QLXkU4wnRVbh	Engineer	\N	\N
3	sivermee2@vkontakte.ru	Male	cQQ0flW	Architect	\N	\N
4	agreenan3@barnesandnoble.com	Female	fk3GyIGQm	Electrician	\N	\N
5	sthirst4@blog.com	Male	rRbsjJGFMq57	Construction Foreman	\N	\N
6	loak5@nifty.com	Female	46sy8hp1eJ	Estimator	\N	\N
7	ebroadey6@guardian.co.uk	Male	YkEXnE	Subcontractor	\N	\N
8	dtoupe7@surveymonkey.com	Female	QvhyaX	Engineer	\N	\N
9	jborsnall8@mediafire.com	Male	rFEoyMIhq3mF	Surveyor	\N	\N
10	cbogace9@jigsy.com	Male	nePyrtWqBf	Construction Worker	\N	\N
11	ibradnecka@clickbank.net	Female	LSXxJK	Estimator	\N	\N
12	dwoodrooffeb@purevolume.com	Female	IdyhrRQZ718W	Supervisor	\N	\N
13	amooresc@wikispaces.com	Female	RDrCEPDuJ	Engineer	\N	\N
14	kknightd@deliciousdays.com	Male	zKKphzIdn	Engineer	\N	\N
15	bharrisse@delicious.com	Male	RSWYsH240nj	Construction Foreman	\N	\N
16	jdruryf@unc.edu	Male	djBYiXGePym	Architect	\N	\N
17	drevang@yellowpages.com	Male	pU0vIZ5HeZa	Construction Manager	\N	\N
18	cbaldockh@typepad.com	Male	wf8GZ2zHkK	Construction Foreman	\N	\N
19	hdobrowskii@usnews.com	Male	ylquO3oCuD	Electrician	\N	\N
20	lwalewskij@domainmarket.com	Genderfluid	PoSJTqDJkJu	Surveyor	\N	\N
21	ovanyatink@hugedomains.com	Female	HWg7m2l3p	Construction Worker	\N	\N
22	emacbethl@tripod.com	Female	DW1WhUg416	Subcontractor	\N	\N
23	isiemonm@washingtonpost.com	Male	RcN8UVPG	Electrician	\N	\N
24	rforgann@linkedin.com	Male	qanYYdN	Construction Expeditor	\N	\N
25	vaggiso@usgs.gov	Male	101IqYhQEu	Architect	\N	\N
26	mstowtep@ezinearticles.com	Female	wzrJ5FOS	Supervisor	\N	\N
27	bgrieveq@ycombinator.com	Female	Wl7DxU	Electrician	\N	\N
28	mcluneyr@instagram.com	Female	XfqCxSx	Electrician	\N	\N
29	scamplings@people.com.cn	Male	HPA7rBeO5z4z	Subcontractor	\N	\N
30	sflavellet@msn.com	Female	XcqMCe8l08	Estimator	\N	\N
31	rtrassu@wiley.com	Male	cjpwrYt	Engineer	\N	\N
32	eogelbev@youtu.be	Female	quXBIavRSi	Project Manager	\N	\N
33	vwhittenburyw@weather.com	Female	2TkaD2B	Engineer	\N	\N
34	jcoakleyx@booking.com	Female	8npHDaZeC	Construction Manager	\N	\N
35	cdysarty@gov.uk	Female	vcYRsxv0	Project Manager	\N	\N
36	kyeelesz@ted.com	Male	mfCgAgQSQ	Engineer	\N	\N
37	gdallinder10@wikipedia.org	Male	dlC0FP6ye	Subcontractor	\N	\N
38	jchaim11@tmall.com	Male	s2o6Wn889U	Architect	\N	\N
39	mczapla12@mysql.com	Male	CMzhg3mf	Estimator	\N	\N
40	jmiddle13@sohu.com	Male	uYomHw1T	Construction Manager	\N	\N
41	mjodrelle14@reddit.com	Genderqueer	TjvO7Lu	Electrician	\N	\N
42	nvanetti15@hubpages.com	Female	JCndXgKlpOVz	Construction Foreman	\N	\N
43	porbell16@mit.edu	Female	D8iv4d7u	Engineer	\N	\N
44	ggabbatiss17@sun.com	Female	VLahPUeY	Electrician	\N	\N
45	asterricks18@cdbaby.com	Female	u9IYZr	Construction Foreman	\N	\N
46	skibbee19@hatena.ne.jp	Male	6hhuUZI	Construction Foreman	\N	\N
47	mgullick1a@google.com.br	Male	5Um7pk	Subcontractor	\N	\N
48	hpebworth1b@flickr.com	Male	zLY23wqE	Estimator	\N	\N
49	ematterface1c@hud.gov	Female	IqXMqHX1dqZI	Construction Manager	\N	\N
50	bmacneilage1d@photobucket.com	Female	jOn56QwXu0	Construction Manager	\N	\N
51	scharlo1e@columbia.edu	Male	XwOXpF2o	Estimator	\N	\N
52	egeelan1f@reverbnation.com	Male	eo8o49n	Construction Worker	\N	\N
53	tnegro1g@businessinsider.com	Female	msbmE7VYO	Construction Foreman	\N	\N
54	abarette1h@economist.com	Male	pJhz9oD	Construction Worker	\N	\N
55	gwarrier1i@alexa.com	Male	vALnpHEe5Ls	Electrician	\N	\N
56	lridge1j@mit.edu	Male	CxQ0xKCeusmx	Construction Manager	\N	\N
57	bwelldrake1k@lulu.com	Male	TUpIGkydUS5	Construction Manager	\N	\N
58	fmoncey1l@is.gd	Male	caxRTR	Surveyor	\N	\N
59	codogherty1m@cnn.com	Female	uaxexy7K	Construction Foreman	\N	\N
60	aflaubert1n@lycos.com	Male	BLobMX49FfOe	Construction Expeditor	\N	\N
61	grattery1o@unblog.fr	Bigender	R0vX8qB	Subcontractor	\N	\N
62	nmcelory1p@purevolume.com	Agender	0rodhPg	Architect	\N	\N
63	bmattiassi1q@discovery.com	Female	cgIWWaui6Eto	Electrician	\N	\N
64	jjenking1r@lycos.com	Female	RKQ0YcsD0Q	Estimator	\N	\N
65	rsartain1s@diigo.com	Male	BnVh8nIPoFz	Estimator	\N	\N
66	eandreas1t@bing.com	Male	02xcGrtP	Construction Worker	\N	\N
67	elilleman1u@nhs.uk	Male	M069bmTA	Construction Foreman	\N	\N
68	jbachs1v@tumblr.com	Male	0dhxcWTlqI	Project Manager	\N	\N
69	sslayton1w@webeden.co.uk	Genderfluid	fSoZFZ1f	Construction Foreman	\N	\N
70	rwilby1x@stumbleupon.com	Male	1Eis0oPLtZa	Construction Worker	\N	\N
71	aspreckley1y@eventbrite.com	Male	9UwgSi	Construction Foreman	\N	\N
72	cgorghetto1z@amazon.com	Male	9iunBFGj	Project Manager	\N	\N
73	ctreuge20@geocities.jp	Male	RfRfdUe	Construction Foreman	\N	\N
74	bsavage21@about.com	Female	OpUmD57qr3	Project Manager	\N	\N
75	nfrift22@bizjournals.com	Female	OuoSRXNL02q	Subcontractor	\N	\N
76	lbranton23@nature.com	Non-binary	tp8Nh6Q	Architect	\N	\N
77	dworvill24@utexas.edu	Female	wqgonO	Construction Worker	\N	\N
78	bbilling25@shop-pro.jp	Male	deh5cBZ	Engineer	\N	\N
79	tdelahaye26@statcounter.com	Female	wIsr5g	Engineer	\N	\N
80	jseath27@cornell.edu	Male	kq81gRLpMOKJ	Construction Expeditor	\N	\N
81	votoole28@friendfeed.com	Polygender	eui66Ct23z	Project Manager	\N	\N
82	kcortez29@hao123.com	Male	IW9jHyFWHC	Electrician	\N	\N
83	coldford2a@scientificamerican.com	Male	pkZ8BZ58	Surveyor	\N	\N
84	kdoorbar2b@si.edu	Female	0t024J	Engineer	\N	\N
85	dmizen2c@berkeley.edu	Female	f1KdDMMjS	Project Manager	\N	\N
86	waldred2d@thetimes.co.uk	Female	yVNQzjaQ	Subcontractor	\N	\N
87	nclulee2e@cloudflare.com	Female	RbqPLdCAgn	Architect	\N	\N
88	rdanielsson2f@opera.com	Male	faECcaM	Electrician	\N	\N
89	ehailwood2g@shareasale.com	Non-binary	onZHOEmlLc	Architect	\N	\N
90	aanyon2h@shareasale.com	Male	QfmF0xdT	Construction Worker	\N	\N
91	rvasic2i@ihg.com	Male	gTLp0Woas	Electrician	\N	\N
92	rzarb2j@pcworld.com	Male	C1ZmRFsrG2	Subcontractor	\N	\N
93	tvennart2k@google.it	Male	xYYRAKf1eFk	Subcontractor	\N	\N
94	nstuther2l@google.it	Female	aSpkH8	Surveyor	\N	\N
95	hlotterington2m@ed.gov	Female	HLur8P0	Project Manager	\N	\N
96	gkeys2n@netvibes.com	Female	AvGmAuf1b	Estimator	\N	\N
97	tspedding2o@sciencedirect.com	Female	gceCxisIrK1P	Construction Foreman	\N	\N
98	cborrill2p@sciencedirect.com	Male	L38dNYJaR6F	Project Manager	\N	\N
99	ceard2q@china.com.cn	Female	6zZaAQONzaDl	Supervisor	\N	\N
100	sduligall2r@washington.edu	Male	6VHZvc2E	Engineer	\N	\N
101	syifaulqolbi32@gmail.com	Male	$2b$10$Sp2s2Doc8WZO1CWbjVnkv.e4IBcGbHVgm7bYmjzUeewxz6KVx0iMq	Developer	2023-10-13 20:42:28.586+07	2023-10-13 20:42:28.586+07
102	syifaulqolbi33@gmail.com	Female	$2b$10$nOENQ.2ZK1lDiZtjgGVy3eJjRTS8QU3HeBK8EgLtyUFK8F54CABXu	Frontend	2023-10-13 20:43:27.641+07	2023-10-13 20:43:27.641+07
\.


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

