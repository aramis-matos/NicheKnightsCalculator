--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2

-- Started on 2025-01-02 10:13:39 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 217 (class 1259 OID 16385)
-- Name: character; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."character" (
    id bigint NOT NULL,
    name character varying NOT NULL,
    gender character varying NOT NULL,
    height smallint NOT NULL,
    place_of_birth_id bigint DEFAULT 1 NOT NULL,
    race_id bigint DEFAULT 1 NOT NULL,
    infection_id bigint DEFAULT 1 NOT NULL,
    class_id bigint DEFAULT 1 NOT NULL,
    branch_id bigint DEFAULT 1 NOT NULL
);


ALTER TABLE public."character" OWNER TO root;

--
-- TOC entry 236 (class 1255 OID 16393)
-- Name: all_artist_characters(text); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_artist_characters(search text) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT 
"character"
FROM "character_artist" JOIN "character"
ON "character".id = character_id
JOIN "artist" ON "artist".id = "artist_id" WHERE "artist".name ILIKE search
$$;


ALTER FUNCTION public.all_artist_characters(search text) OWNER TO root;

--
-- TOC entry 238 (class 1255 OID 24694)
-- Name: all_branch_character(text); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_branch_character(search text) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT
    "character"
FROM
    "character"
    JOIN "branch" ON "character".branch_id = "branch".id
WHERE
    "branch".name ILIKE search
$$;


ALTER FUNCTION public.all_branch_character(search text) OWNER TO root;

--
-- TOC entry 237 (class 1255 OID 24693)
-- Name: all_class_character(text); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_class_character(search text) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT
    "character"
FROM
    "character"
    JOIN "class" ON "character".class_id = "class".id
WHERE
    "class".name ILIKE (search || '%')
$$;


ALTER FUNCTION public.all_class_character(search text) OWNER TO root;

--
-- TOC entry 235 (class 1255 OID 16488)
-- Name: all_height_character(integer); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_height_character(char_height integer) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT
    *
FROM
    "character"
WHERE
    "character".height <= char_height
    AND "character".height <> -1
$$;


ALTER FUNCTION public.all_height_character(char_height integer) OWNER TO root;

--
-- TOC entry 232 (class 1255 OID 16394)
-- Name: all_infection_character(text); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_infection_character(search text) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT "character"
	FROM public."character" JOIN "infection"
	ON "infection".id = "character".infection_id
	WHERE "infection".name ILIKE (search || '%')
$$;


ALTER FUNCTION public.all_infection_character(search text) OWNER TO root;

--
-- TOC entry 234 (class 1255 OID 16395)
-- Name: all_place_of_birth_character(text); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_place_of_birth_character(search text) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT 
"character"
	FROM public."character"
	JOIN "place_of_birth"
	ON "place_of_birth".id = "character".place_of_birth_id
	WHERE "place_of_birth".name ILIKE ('%' || search || '%')
$$;


ALTER FUNCTION public.all_place_of_birth_character(search text) OWNER TO root;

--
-- TOC entry 233 (class 1255 OID 16396)
-- Name: all_race_character(text); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_race_character(search text) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT
    "character"
FROM
    "character"
    JOIN "race" ON "race".id = "character".race_id
WHERE
    "race".name ILIKE ('%' || search || '%')
$$;


ALTER FUNCTION public.all_race_character(search text) OWNER TO root;

--
-- TOC entry 218 (class 1259 OID 16397)
-- Name: artist; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.artist (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.artist OWNER TO root;

--
-- TOC entry 219 (class 1259 OID 16402)
-- Name: artist_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.artist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.artist_id_seq OWNER TO root;

--
-- TOC entry 3467 (class 0 OID 0)
-- Dependencies: 219
-- Name: artist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.artist_id_seq OWNED BY public.artist.id;


--
-- TOC entry 231 (class 1259 OID 16501)
-- Name: branch; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.branch (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.branch OWNER TO root;

--
-- TOC entry 230 (class 1259 OID 16500)
-- Name: branch_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.branch_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.branch_id_seq OWNER TO root;

--
-- TOC entry 3468 (class 0 OID 0)
-- Dependencies: 230
-- Name: branch_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.branch_id_seq OWNED BY public.branch.id;


--
-- TOC entry 220 (class 1259 OID 16403)
-- Name: character_artist; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.character_artist (
    character_id bigint NOT NULL,
    artist_id bigint NOT NULL
);


ALTER TABLE public.character_artist OWNER TO root;

--
-- TOC entry 221 (class 1259 OID 16406)
-- Name: character_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.character_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.character_id_seq OWNER TO root;

--
-- TOC entry 3469 (class 0 OID 0)
-- Dependencies: 221
-- Name: character_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.character_id_seq OWNED BY public."character".id;


--
-- TOC entry 229 (class 1259 OID 16490)
-- Name: class; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.class (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.class OWNER TO root;

--
-- TOC entry 228 (class 1259 OID 16489)
-- Name: class_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.class_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.class_id_seq OWNER TO root;

--
-- TOC entry 3470 (class 0 OID 0)
-- Dependencies: 228
-- Name: class_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.class_id_seq OWNED BY public.class.id;


--
-- TOC entry 222 (class 1259 OID 16407)
-- Name: infection; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.infection (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.infection OWNER TO root;

--
-- TOC entry 223 (class 1259 OID 16412)
-- Name: infection_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.infection_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.infection_id_seq OWNER TO root;

--
-- TOC entry 3471 (class 0 OID 0)
-- Dependencies: 223
-- Name: infection_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.infection_id_seq OWNED BY public.infection.id;


--
-- TOC entry 224 (class 1259 OID 16413)
-- Name: place_of_birth; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.place_of_birth (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.place_of_birth OWNER TO root;

--
-- TOC entry 225 (class 1259 OID 16418)
-- Name: place_of_birth_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.place_of_birth_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.place_of_birth_id_seq OWNER TO root;

--
-- TOC entry 3472 (class 0 OID 0)
-- Dependencies: 225
-- Name: place_of_birth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.place_of_birth_id_seq OWNED BY public.place_of_birth.id;


--
-- TOC entry 226 (class 1259 OID 16419)
-- Name: race; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.race (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.race OWNER TO root;

--
-- TOC entry 227 (class 1259 OID 16424)
-- Name: race_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.race_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.race_id_seq OWNER TO root;

--
-- TOC entry 3473 (class 0 OID 0)
-- Dependencies: 227
-- Name: race_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.race_id_seq OWNED BY public.race.id;


--
-- TOC entry 3257 (class 2604 OID 16425)
-- Name: artist id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.artist ALTER COLUMN id SET DEFAULT nextval('public.artist_id_seq'::regclass);


--
-- TOC entry 3262 (class 2604 OID 16504)
-- Name: branch id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.branch ALTER COLUMN id SET DEFAULT nextval('public.branch_id_seq'::regclass);


--
-- TOC entry 3251 (class 2604 OID 16426)
-- Name: character id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character" ALTER COLUMN id SET DEFAULT nextval('public.character_id_seq'::regclass);


--
-- TOC entry 3261 (class 2604 OID 16493)
-- Name: class id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.class ALTER COLUMN id SET DEFAULT nextval('public.class_id_seq'::regclass);


--
-- TOC entry 3258 (class 2604 OID 16427)
-- Name: infection id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.infection ALTER COLUMN id SET DEFAULT nextval('public.infection_id_seq'::regclass);


--
-- TOC entry 3259 (class 2604 OID 16428)
-- Name: place_of_birth id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.place_of_birth ALTER COLUMN id SET DEFAULT nextval('public.place_of_birth_id_seq'::regclass);


--
-- TOC entry 3260 (class 2604 OID 16429)
-- Name: race id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.race ALTER COLUMN id SET DEFAULT nextval('public.race_id_seq'::regclass);


--
-- TOC entry 3448 (class 0 OID 16397)
-- Dependencies: 218
-- Data for Name: artist; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.artist (id, name) FROM stdin;
1	3MO
2	alchemaniac
3	Anisotropy
4	Anmi
5	Ask
6	aZLing4
7	Cenm0
8	Chuzenji
9	Cornelies
10	deel
11	Dossoles Holiday
12	Horin
13	hou
14	HUG
15	infukun
16	Infukun
17	IRIS_口艺
18	Iritoa
19	Jacknife
20	kan
21	KENTllaall
22	Kumatangent
23	KuroBlood
24	LAL!ROLE
25	Lanzi
26	Liduke
27	Liyu黎
28	LLC
29	LM7
30	Lpip
31	M1917史密斯维森
32	m9nokuro
33	Mag42
34	Nagu
35	Namie
36	neco
37	nineo
38	NOCO
39	NoriZC
40	Peachy Miruku
41	RAN
42	RAYVON
43	REALMBW
44	redjuice
45	SculLhunter
46	Sho
47	Shō
48	Skade
49	small_ryuzaki
50	STAR影法师
51	Studio Montagne
52	TEAM EXPNDR
53	toast
54	TOKI
55	TOMATO
56	TrNyteal
57	Ubisoft
58	umo_yszx
59	U介
60	WincalBlanke
61	YUJI
62	〇亻
63	おぐち
64	およ
65	せんむ
66	れおえん
67	アシマ
68	カワグチ
69	ヌードル
70	一千
71	一立里子
72	三目YYB
73	上埜
74	下野宏铭
75	九日九号
76	二开
77	二色こぺ
78	伍秋秋秋秋
79	咩煲
80	唯@W
81	嘎嘎人
82	多元菌
83	将
84	尾鱼
85	山x2
86	幻象黑兔
87	戏言咸咸
88	我妻洛酱
89	我妻洛醬
90	折射镜
91	时辰
92	板板
93	树豚
94	水滴鱼
95	海猫络合物
96	渣念
97	百慕大飞鱼
98	直立行走
99	科学
100	竜崎いち
101	红色彗星
102	织布机loom
103	臼
104	色塩
105	藻
106	虎三
107	虬墨一型
108	谜肘
109	轟将
110	过失帝国
111	野崎つばた
112	釜飯轟々丸
113	阿鬼
114	鸭
\.


--
-- TOC entry 3461 (class 0 OID 16501)
-- Dependencies: 231
-- Data for Name: branch; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.branch (id, name) FROM stdin;
1	Abjurer
2	Agent
3	Alchemist
4	Ambusher
5	Artificer
6	Artilleryman
7	Arts Fighter
8	Arts Protector
9	Bard
10	Besieger
11	Blast
12	Centurion
13	Chain
14	Charger
15	Core
16	Crusher
17	Deadeye
18	Decel Binder
19	Dollkeeper
20	Dreadnought
21	Duelist
22	Earthshaker
23	Executor
24	Fighter
25	Flinger
26	Fortress
27	Geek
28	Guardian
29	Heavyshooter
30	Hexer
31	Hookmaster
32	Hunter
33	Incantation
34	Instructor
35	Juggernaut
36	Liberator
37	Loopshooter
38	Lord
39	Marksman
40	Mech-Accord
41	Medic
42	Merchant
43	Multi-target
44	Mystic
45	Phalanx
46	Pioneer
47	Primal
48	Primal Protector
49	Protector
50	Push Stroker
51	Reaper
52	Ritualist
53	Sentry Protector
54	Shaper
55	Skyranger
56	Soloblade
57	Splash
58	Spreadshooter
59	Standard Bearer
60	Summoner
61	Swordmaster
62	Tactician
63	Therapist
64	Trapmaster
65	Wandering
\.


--
-- TOC entry 3447 (class 0 OID 16385)
-- Dependencies: 217
-- Data for Name: character; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."character" (id, name, gender, height, place_of_birth_id, race_id, infection_id, class_id, branch_id) FROM stdin;
43	Jessica the Liberated	Female	149	32	15	2	2	53
44	Kal'tsit	Female	169	21	15	1	4	41
45	Kirin R Yato	Female	161	9	26	1	6	23
46	Lappland the Decadenza	Female	162	27	23	1	1	40
47	Lee	Male	193	34	22	2	6	42
48	Lessing	Male	175	16	7	2	3	20
49	Lin	Female	166	17	44	2	1	45
50	Ling	Female	166	34	37	2	7	60
51	Logos	Male	178	12	34	1	1	15
52	Lumen	Male	177	10	1	2	4	63
53	Magallan	Female	160	4	21	2	7	60
54	Marcille	Female	160	20	14	2	1	57
55	Mizuki	Male	161	9	1	2	6	4
56	Mostima	Female	170	15	37	2	1	57
57	Mountain	Male	195	4	15	1	3	24
58	Mudrock	Female	163	12	34	1	2	35
59	Muelsyse	Female	169	28	14	2	8	62
60	Młynar	Male	191	13	19	2	3	36
61	Narantuya	Female	177	24	19	2	5	37
62	Nearl the Radiant Knight	Female	171	13	19	2	3	20
63	Nian	Female	165	34	37	3	2	49
64	Nightingale	Female	164	12	34	1	4	43
65	Nymph	Female	156	12	34	1	1	47
66	Pallas	Female	162	18	16	1	3	34
67	Passenger	Male	187	4	21	1	1	13
68	Penance	Female	168	27	23	2	2	35
69	Pepe	Female	155	24	15	2	3	22
70	Phantom	Male	185	32	15	1	6	23
71	Pozëmka	Female	177	31	23	2	5	29
72	Qiubai	Female	178	34	13	2	3	38
73	Ray	Female	170	22	8	1	5	32
74	Reed the Flame Shadow	Female	172	32	10	1	4	33
75	Rosa	Female	174	31	41	2	5	10
76	Rosmontis	Female	142	4	15	1	5	25
77	Saga	Female	164	9	27	2	8	46
78	Saileach	Female	166	32	42	2	8	59
79	Saria	Female	174	4	42	2	2	28
80	Schwarz	Female	169	22	15	2	5	29
81	Shining	Female	175	12	34	2	4	41
82	Shu	Female	165	34	37	2	2	28
83	Siege	Female	172	32	6	2	8	46
84	Silence the Paradigmatic	Female	154	4	21	1	7	1
85	SilverAsh	Male	192	14	15	2	3	38
86	Skadi	Female	166	1	38	2	3	20
87	Skadi the Corrupting Heart	Female	166	1	37	2	7	9
88	Specter the Unchained	Female	165	1	1	1	6	19
89	Stainless	Male	178	32	15	2	7	5
90	Surtr	Female	162	29	34	1	3	7
91	Suzuran	Female	137	9	43	1	7	18
92	Swire the Elegant Wit	Female	163	17	15	2	6	42
93	Texas the Omertosa	Female	161	4	23	2	6	23
94	Thorns	Male	177	10	1	2	3	38
95	Thorns the Lodestar	Male	177	10	1	2	6	3
96	Typhon	Female	155	23	34	1	5	10
97	Ulpianus	Male	189	1	1	2	3	16
98	Vigil	Male	174	27	23	2	8	62
99	Vina Victoria	Female	172	32	6	2	3	7
100	Virtuosa	Female	168	15	33	2	7	52
101	Viviana	Female	171	16	13	2	3	7
102	Vulpisfoglia	Female	161	27	43	2	8	46
103	W	Female	165	12	34	1	5	6
104	Weedy	Female	155	10	1	2	6	50
105	Wiš'adel	Female	165	12	34	1	5	25
106	Zuo Le	Male	175	34	29	2	3	56
107	Absinthe	Female	159	31	41	2	1	15
108	Akafuyu	Female	176	9	1	2	3	56
109	Almond	Female	140	4	27	1	6	31
110	Amiya	Female	142	22	8	1	3	7
111	Andreana	Female	166	10	1	2	5	17
112	Aosta	Male	177	27	23	1	5	58
113	April	Female	157	22	8	1	5	39
114	Aroma	Female	157	27	23	1	1	11
115	Asbestos	Female	156	22	35	1	2	8
116	Ashlock	Female	164	13	44	1	2	26
117	Astesia	Female	165	4	21	1	3	7
118	Astgenne	Female	166	4	21	1	1	13
119	Aurora	Female	169	14	41	1	2	21
120	Ayerscarpe	Male	173	22	8	2	3	38
121	Bassline	Male	160	16	23	2	2	28
122	Beeswax	Female	157	24	7	2	1	45
123	Bena	Female	143	32	7	2	6	19
124	Bibeak	Female	161	23	21	1	3	61
125	Bison	Male	163	17	16	2	2	49
126	Blacknight	Female	166	22	35	1	8	62
127	Blitz	Male	175	29	38	2	2	53
128	Blue Poison	Female	157	29	4	2	5	39
129	Bobbing	Male	178	4	27	2	7	52
130	Breeze	Female	162	32	43	1	4	43
131	Broca	Male	189	27	15	1	3	12
132	Bryophyta	Male	178	25	21	1	3	34
133	Cantabile	Female	169	3	21	1	8	2
134	Catherine	Female	171	32	15	1	7	5
135	Cement	Female	155	22	44	2	2	21
136	Ceylon	Female	162	26	21	2	4	63
137	Chiave	Male	182	27	43	1	8	46
138	Chilchuck	Male	-1	6	17	2	8	2
139	Cliffheart	Female	163	14	15	1	6	31
140	Coldshot	Female	173	4	13	2	5	32
141	Corroserum	Male	172	4	29	2	1	11
142	Croissant	Female	163	18	16	2	2	49
143	Czerny	Male	182	16	13	1	2	8
144	Dagda	Female	155	32	15	2	3	24
145	Delphine	Female	152	32	15	2	1	44
146	Diamante	Male	180	16	7	1	1	47
147	Doc	Male	177	29	38	2	3	34
148	Elysium	Male	187	10	21	1	8	59
149	Enforcer	Male	176	15	33	2	6	50
150	Erato	Female	158	18	21	2	5	10
151	Executor	Male	181	15	33	2	5	58
152	FEater	Female	160	34	41	1	6	50
153	Fang the Fire-sharpened	Female	162	13	19	1	8	14
154	Figurino	Male	165	27	23	2	6	42
155	Firewatch	Female	158	29	13	2	5	17
156	Firewhistle	Female	166	22	21	2	2	26
157	Flamebringer	Male	190	12	34	1	3	20
158	Flint	Female	144	24	21	2	3	24
159	Folinic	Female	164	31	15	1	4	41
160	Franka	Female	163	4	43	1	3	20
161	Frost	Female	172	29	38	2	6	64
162	Fuze	Male	180	29	38	2	3	12
163	Glaucus	Female	159	2	37	2	7	18
164	Grain Buds	Female	153	34	21	2	7	18
165	Grani	Female	154	32	19	2	8	14
166	GreyThroat	Female	162	28	21	2	5	39
167	Greyy the Lightningbearer	Male	169	3	27	1	5	25
168	Harmonie	Female	160	32	15	2	1	44
169	Harold	Male	190	32	15	2	4	65
170	Heavyrain	Female	159	24	19	2	2	49
171	Heidi	Female	165	32	15	2	7	9
172	Hibiscus the Purifier	Female	160	32	34	1	4	33
173	Highmore	Female	156	10	1	2	3	51
174	Honeyberry	Female	155	22	44	2	4	65
175	Hung	Male	183	17	27	2	2	28
176	Iana	Female	157	29	38	2	6	19
177	Indra	Female	173	29	15	1	3	24
178	Insider	Male	184	15	33	2	5	39
179	Iris	Female	147	32	15	2	1	44
180	Istina	Female	156	31	41	2	7	18
181	Jieyun	Female	164	34	2	1	5	6
182	Kafka	Female	149	4	21	1	6	23
183	Kazemaru	Female	157	9	15	2	6	19
184	Kestrel	Female	170	24	21	1	8	46
185	Kirara	Female	160	9	1	1	6	4
186	Kjera	Female	165	14	37	2	1	40
187	Kroos the Keen Glint	Female	161	22	8	1	5	39
188	La Pluma	Female	166	3	21	2	3	51
189	Laios	Male	185	20	36	2	3	20
190	Lappland	Female	162	27	23	1	3	38
191	Lava the Purgatory	Female	158	32	34	1	1	57
192	Leizi	Female	171	34	20	2	1	13
193	Leonhardt	Male	165	22	8	1	1	57
194	Leto	Female	167	31	41	2	3	38
195	Liskarm	Female	156	33	42	2	2	53
196	Lucilla	Female	166	1	1	2	7	30
197	Lunacub	Female	148	27	23	1	5	17
198	Manticore	Female	155	24	24	1	6	4
199	Mayer	Female	159	4	3	2	7	60
200	Melanite	Female	155	4	29	1	5	29
201	Meteorite	Female	170	12	34	1	5	6
202	Minimalist	Male	130	5	11	1	1	40
203	Mint	Female	155	32	15	1	1	45
204	Mitm	Male	165	12	34	1	8	62
205	Morgan	Female	165	32	15	2	3	20
206	Mr. Nothing	Male	187	34	21	2	6	42
207	Mulberry	Female	158	34	21	1	4	65
208	Nearl	Female	171	13	19	1	2	28
209	Nightmare	Female	156	32	15	1	1	15
210	Nine-Colored Deer	Female	172	34	13	2	7	1
211	Odda	Male	168	12	34	1	3	22
212	Paprika	Female	155	4	34	1	4	13
213	Papyrus	Female	160	24	15	2	4	13
214	Philae	Female	168	24	34	1	2	48
215	Platinum	Female	160	13	19	2	5	39
216	Poncirus	Female	155	25	21	1	8	46
217	Pramanix	Female	161	14	15	2	7	30
218	Projekt Red	Female	162	28	23	2	6	23
219	Provence	Female	162	27	23	1	5	29
220	Proviso	Female	165	13	19	2	7	18
221	Ptilopsis	Female	164	4	21	3	4	43
222	Puzzle	Male	177	32	42	1	8	2
223	Qanipalaat	Male	169	23	43	2	1	15
224	Quercus	Female	174	32	15	2	7	1
225	Rathalos S Noir Corne	Male	180	9	26	1	3	56
226	Reed	Female	172	32	10	1	8	14
227	Robin	Female	155	4	3	2	6	64
228	Rockrock	Female	161	32	15	2	1	40
229	Rose Salt	Female	146	10	29	1	4	43
230	Sand Reckoner	Male	170	24	21	2	7	60
231	Santalla	Female	170	23	15	1	1	57
232	Savage	Female	160	22	8	2	3	12
233	Scene	Female	154	24	30	1	7	60
234	Senshi	Male	140	11	12	2	2	28
235	Sesa	Male	189	24	42	2	5	6
236	Shalem	Male	179	32	29	1	2	8
237	Shamare	Female	138	27	43	1	7	30
238	Sideroca	Female	164	18	16	2	3	7
239	Silence	Female	154	4	21	1	4	41
240	Skyfire	Female	162	32	15	2	1	57
241	Snowsant	Female	155	17	21	2	6	31
242	Sora	Female	155	30	40	2	7	9
243	Specter	Female	162	1	37	3	3	12
244	Spuria	Female	159	15	33	2	6	27
245	Swire	Female	163	17	15	2	3	34
246	Tachanka	Male	183	29	38	2	3	61
247	Tecno	Female	130	3	11	1	1	54
248	Tequila	Male	182	3	27	2	3	36
249	Texas	Female	161	4	23	2	8	46
250	Tin Man	Male	184	28	37	3	6	3
251	Toddifons	Female	168	32	42	1	5	10
252	Tomimi	Female	142	24	5	2	1	15
253	Tsukinogi	Female	165	9	13	1	7	1
254	Tuye	Female	153	24	16	1	4	41
255	Underflow	Female	170	1	1	2	2	53
256	Valarqvin	Female	188	23	34	1	7	52
257	Vendela	Female	160	32	15	1	4	33
258	Vulcan	Female	170	18	16	1	2	35
259	Waai Fu	Female	162	34	15	2	6	23
260	Wanqing	Male	170	34	16	2	8	59
261	Warfarin	Female	157	12	34	2	4	41
262	Warmy	Female	140	22	8	1	1	47
263	Whislash	Female	165	13	19	2	3	34
264	Whisperain	Female	169	10	1	2	4	63
265	Wild Mane	Female	158	13	19	1	8	14
266	Wind Chimes	Female	175	34	16	1	3	16
267	Windflit	Male	180	4	27	2	7	5
268	Zima	Female	162	31	41	2	8	46
269	Pith	Female	165	32	21	1	1	57
270	Sharp	Male	180	4	29	1	3	20
271	Stormeye	Male	180	12	34	1	5	39
272	Touch	Female	152	16	7	1	4	41
273	Tulip	Female	177	10	29	1	8	46
274	Aciddrop	Female	150	4	21	1	5	29
275	Ambriel	Female	160	15	33	2	5	17
276	Arene	Male	161	15	33	1	3	38
277	Beanstalk	Female	155	4	32	2	8	62
278	Beehunter	Female	163	31	41	1	3	24
279	Bubble	Female	135	24	9	1	2	49
280	Caper	Female	150	3	8	1	5	37
281	Chestnut	Male	132	28	11	2	4	65
282	Click	Female	144	28	44	2	1	40
283	Contrail	Female	155	4	44	1	6	55
284	Conviction	Conviction	145	18	39	1	3	20
285	Courier	Male	177	14	18	2	8	46
286	Cuora	Female	148	28	28	1	2	49
287	Cutter	Female	155	4	43	1	3	61
288	Deepcolor	Female	163	28	37	2	7	60
289	Dobermann	Female	163	3	27	1	3	34
290	Earthspirit	Female	161	16	7	1	7	18
291	Estelle	Female	162	28	5	1	3	12
292	Ethan	Male	163	29	35	1	6	4
293	Frostleaf	Female	157	4	43	1	3	38
3	Aak	Male	161	17	15	2	6	27
4	Angelina	Female	162	8	43	1	7	18
5	Archetto	Female	152	15	21	2	5	39
6	Ascalon	Female	175	12	34	1	6	4
7	Ash	Female	170	29	38	2	5	39
8	Bagpipe	Female	167	32	42	2	8	14
9	Blaze	Female	172	32	15	1	3	12
10	Blemishine	Female	165	13	19	2	2	28
11	Carnelian	Female	173	24	7	2	1	45
12	Ceobe	Female	153	3	27	1	1	15
13	Ch'en	Female	168	17	22	3	3	61
14	Ch'en the Holungday	Female	168	17	22	1	5	58
15	Chongyue	Male	188	34	37	2	3	24
16	Civilight Eterna	Female	165	12	37	3	7	9
17	Crownslayer	Female	161	31	32	1	6	23
18	Degenbrecher	Female	182	16	7	2	3	61
19	Dorothy	Female	170	4	44	2	6	64
20	Dusk	Female	162	34	37	2	1	57
21	Ebenholz	Male	173	16	7	1	1	44
22	Ela	Female	173	29	38	2	6	64
23	Eunectes	Female	171	24	29	1	2	21
24	Executor the Ex Foedere	Male	181	15	33	2	3	51
25	Exusiai	Female	159	15	33	2	5	39
26	Eyjafjalla	Female	145	16	7	1	1	15
27	Eyjafjalla the Hvít Aska	Female	153	16	7	1	4	65
28	Fartooth	Female	155	13	21	1	5	17
29	Fiammetta	Female	171	15	21	2	5	6
30	Flametail	Female	159	13	44	1	8	46
31	Gavial the Invincible	Female	163	24	5	1	3	12
32	Gladiia	Female	181	1	37	2	6	31
33	Gnosis	Male	188	14	21	2	7	30
34	Goldenglow	Female	159	32	15	1	1	40
35	Hellagur	Male	193	31	21	1	3	56
36	Ho'olheyak	Female	171	4	37	2	1	15
37	Hoederer	Male	185	12	34	1	3	16
38	Horn	Female	168	32	23	2	2	26
39	Hoshiguma	Female	184	9	26	2	2	49
40	Ifrit	Female	159	29	34	3	1	11
41	Ines	Female	168	12	37	1	8	2
42	Irene	Female	156	10	21	2	3	61
294	Gavial	Female	163	28	5	1	4	41
295	Gitano	Female	171	23	13	1	1	57
296	Gravel	Female	156	13	44	2	6	23
297	Greyy	Male	163	3	27	1	1	57
298	Gummy	Female	155	31	41	2	2	28
299	Haze	Female	158	32	15	1	1	15
300	Humus	Male	185	4	16	1	3	51
301	Indigo	Female	167	10	29	2	1	44
302	Jackie	Female	157	4	27	1	3	24
303	Jaye	Male	174	17	41	2	6	42
304	Jessica	Female	147	32	15	2	5	39
305	Luo Xiaohei	Male	-1	29	15	2	3	38
306	Lutonada	Female	159	3	44	1	2	35
307	Matoimaru	Female	172	9	26	2	3	20
308	Matterhorn	Male	182	14	16	2	2	49
309	May	Female	151	32	21	2	5	39
310	Meteor	Female	164	13	19	1	5	39
311	Mousse	Female	154	32	15	1	3	7
312	Myrrh	Female	143	29	43	2	4	41
313	Myrtle	Female	131	29	11	2	8	59
314	Perfumer	Female	158	18	43	1	4	43
315	Pinecone	Female	148	4	21	2	5	58
316	Podenco	Female	145	3	27	2	7	18
317	Pudding	Female	156	4	1	3	1	13
318	Purestream	Female	155	34	1	2	4	63
319	Quartz	Female	173	4	23	2	3	16
320	Roberta	Female	155	4	3	2	7	5
321	Rope	Female	155	22	8	1	6	31
322	Scavenger	Female	164	29	44	1	8	46
323	Shaw	Female	135	17	44	2	6	50
324	Shirayuki	Female	154	9	3	2	5	6
325	Sussurro	Female	142	27	43	1	4	41
326	Totter	Male	185	24	21	1	5	10
327	Utage	Female	161	9	38	1	3	56
328	Verdant	Male	163	32	29	1	6	19
329	Vermeil	Female	153	29	43	1	5	39
330	Vigna	Female	142	12	34	1	8	14
331	Adnachiel	Male	171	15	33	1	5	39
332	Ansel	Male	163	22	8	2	4	41
333	Beagle	Female	154	3	27	1	2	49
334	Cardigan	Female	156	16	27	2	2	49
335	Catapult	Female	163	13	19	1	5	6
336	Fang	Female	158	13	19	3	8	46
337	Hibiscus	Female	153	32	34	1	4	41
338	Kroos	Female	154	22	8	1	5	39
339	Lava	Female	154	32	34	1	1	57
340	Melantha	Female	161	32	15	1	3	20
341	Midnight	Male	187	7	34	1	3	38
342	Orchid	Female	164	4	21	1	7	18
343	Plume	Female	158	15	21	2	8	14
344	Popukar	Female	144	22	8	1	3	12
345	Spot	Male	169	24	31	1	2	28
346	Steward	Male	172	14	43	1	1	15
347	Vanilla	Female	172	33	42	2	8	46
348	12F	Male	181	29	35	2	1	57
349	Durin	Female	131	28	11	2	1	15
350	Noir Corne	Male	180	9	26	1	2	49
351	Rangers	Male	179	28	35	2	5	39
352	Yato	Female	161	9	26	1	8	46
353	Castle-3	Male	167	19	25	3	3	20
354	Friston-3	Male	145	19	25	3	2	49
355	Justice Knight	Female	160	19	25	3	5	39
356	Lancet-2	Female	149	19	25	3	4	41
357	PhonoR-0	Female	160	19	25	3	7	52
358	THRM-EX	Male	160	19	25	3	6	23
359	Terra Research Commission	Unknown	-1	29	37	2	5	25
360	U-Official	Female	159	28	44	2	7	9
\.


--
-- TOC entry 3450 (class 0 OID 16403)
-- Dependencies: 220
-- Data for Name: character_artist; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.character_artist (character_id, artist_id) FROM stdin;
3	23
4	29
5	2
6	7
7	32
8	59
9	80
9	33
10	100
11	68
12	29
13	80
13	78
14	80
15	23
16	8
17	95
17	98
18	100
19	19
20	86
21	100
22	62
23	26
24	48
25	86
25	84
26	4
27	4
28	39
29	86
29	72
30	39
31	45
32	8
33	100
34	35
35	26
36	29
37	100
37	93
38	32
39	15
40	39
41	26
41	92
42	6
43	7
44	95
44	80
44	101
45	70
46	86
47	23
48	68
49	26
49	11
49	72
49	49
50	74
51	48
52	70
53	39
54	78
54	51
55	35
56	86
57	60
58	51
59	39
60	100
61	92
62	100
63	86
63	51
64	48
65	61
66	6
67	48
68	17
69	35
70	48
71	8
72	49
73	7
74	50
75	48
76	80
77	82
78	74
79	39
80	26
81	100
82	17
83	15
84	75
84	39
85	100
86	2
87	2
88	48
89	70
90	5
91	47
92	74
93	86
93	51
94	86
94	51
95	81
95	86
96	29
97	48
98	13
99	51
100	100
101	8
102	109
103	95
103	26
104	74
105	26
106	75
107	6
108	22
109	98
110	80
110	55
111	28
112	15
113	66
114	69
115	52
116	39
117	61
118	61
119	24
120	39
121	75
122	68
123	74
124	42
125	100
126	49
127	26
128	61
129	14
130	105
131	16
132	7
133	49
134	49
135	99
136	48
136	12
137	16
138	51
139	100
140	33
141	19
142	86
143	75
144	16
145	7
146	64
147	57
148	48
149	8
150	49
151	48
152	41
153	74
154	78
155	6
156	17
157	106
158	6
159	32
160	54
160	103
161	22
162	57
163	74
164	61
165	2
166	32
167	88
168	50
169	70
170	6
171	22
172	74
173	12
174	27
175	23
176	57
177	16
178	58
179	74
180	48
181	78
182	39
183	49
184	112
185	89
186	100
187	74
188	24
189	75
189	51
190	86
191	74
192	100
193	111
194	48
195	54
195	7
196	104
197	17
198	100
199	86
200	44
201	54
202	62
203	69
204	62
205	16
206	48
207	19
208	100
209	30
210	17
211	88
212	92
213	49
214	12
215	48
216	38
217	100
218	15
219	96
220	65
221	100
222	20
223	72
224	61
225	75
226	50
227	6
228	7
229	76
230	70
231	51
232	54
232	103
233	67
234	97
234	51
235	100
236	7
237	74
238	46
239	39
240	54
241	39
242	86
242	33
243	48
244	63
245	74
246	7
247	94
248	70
249	86
250	93
251	85
252	8
253	73
254	6
255	62
256	78
257	51
258	36
259	23
260	72
261	91
262	77
263	100
264	8
265	39
266	62
267	37
268	48
269	9
270	22
271	22
272	22
273	8
274	25
275	94
276	58
277	70
278	53
279	7
280	103
281	93
282	66
283	107
284	55
285	100
286	48
287	74
287	97
288	43
289	28
290	14
291	114
292	113
293	74
294	28
295	108
296	100
297	88
298	48
299	48
300	88
301	102
302	34
303	113
304	32
305	75
306	94
307	100
308	100
309	74
310	14
311	18
312	74
313	79
314	25
315	56
316	67
317	90
318	80
318	98
319	78
320	17
321	32
322	87
323	113
324	113
325	83
326	92
327	112
328	97
329	21
330	74
331	71
332	71
333	74
334	71
335	76
336	74
337	74
338	74
339	74
340	71
341	100
342	48
342	27
343	10
344	74
344	1
345	113
346	71
347	1
348	95
349	48
350	100
351	100
352	48
353	54
354	110
355	39
355	110
356	54
356	110
357	31
358	54
358	3
359	40
360	102
360	90
\.


--
-- TOC entry 3459 (class 0 OID 16490)
-- Dependencies: 229
-- Data for Name: class; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.class (id, name) FROM stdin;
1	Caster
2	Defender
3	Guard
4	Medic
5	Sniper
6	Specialist
7	Supporter
8	Vanguard
\.


--
-- TOC entry 3452 (class 0 OID 16407)
-- Dependencies: 222
-- Data for Name: infection; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.infection (id, name) FROM stdin;
1	Infected
2	Not Infected
3	Unknown
\.


--
-- TOC entry 3454 (class 0 OID 16413)
-- Dependencies: 224
-- Data for Name: place_of_birth; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.place_of_birth (id, name) FROM stdin;
1	Aegir
2	Aegir Region
3	Bolívar
4	Columbia
5	Durin
6	Eastern Continent (self-proclaimed)
7	Far East
8	Florentia, Siracusa
9	Higashi
10	Iberia
11	Izganda (self-proclaimed)
12	Kazdel
13	Kazimierz
14	Kjerag
15	Laterano
16	Leithanien
17	Lungmen
18	Minos
19	N/A
20	Northern Continent (self-proclaimed)
21	Rhodes Island
22	Rim Billiton
23	Sami
24	Sargon
25	Siesta
26	Siesta (Independent City)
27	Siracusa
28	Undisclosed
29	Unknown
30	Unknown as requested by management agency
31	Ursus
32	Victoria
33	Vouivre
34	Yan
\.


--
-- TOC entry 3456 (class 0 OID 16419)
-- Dependencies: 226
-- Data for Name: race; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.race (id, name) FROM stdin;
1	Aegir
2	Anasa
3	Anaty
4	Anura
5	Archosauria
6	Aslan
7	Caprinae
8	Cautus
9	Cerato
10	Draco
11	Durin
12	Dwarf (self-proclaimed)
13	Elafia
14	Elf
15	Feline
16	Forte
17	Half-foot (self-proclaimed)
18	Itra
19	Kuranta
20	Kylin
21	Liberi
22	Lung
23	Lupo
24	Manticore
25	N/A
26	Oni
27	Perro
28	Petram
29	Phidia
30	Pilosa
31	Rebbah
32	Reproba
33	Sankta
34	Sarkaz
35	Savra
36	Tall-man (self-proclaimed)
37	Undisclosed
38	Unknown
39	Unknown (Suspected Liberi)
40	Unknown as requested by management agency
41	Ursus
42	Vouivre
43	Vulpo
44	Zalak
\.


--
-- TOC entry 3474 (class 0 OID 0)
-- Dependencies: 219
-- Name: artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.artist_id_seq', 114, true);


--
-- TOC entry 3475 (class 0 OID 0)
-- Dependencies: 230
-- Name: branch_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.branch_id_seq', 65, true);


--
-- TOC entry 3476 (class 0 OID 0)
-- Dependencies: 221
-- Name: character_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.character_id_seq', 360, true);


--
-- TOC entry 3477 (class 0 OID 0)
-- Dependencies: 228
-- Name: class_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.class_id_seq', 8, true);


--
-- TOC entry 3478 (class 0 OID 0)
-- Dependencies: 223
-- Name: infection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.infection_id_seq', 41, true);


--
-- TOC entry 3479 (class 0 OID 0)
-- Dependencies: 225
-- Name: place_of_birth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.place_of_birth_id_seq', 34, true);


--
-- TOC entry 3480 (class 0 OID 0)
-- Dependencies: 227
-- Name: race_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.race_id_seq', 44, true);


--
-- TOC entry 3268 (class 2606 OID 16431)
-- Name: artist artist_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_name_key UNIQUE (name);


--
-- TOC entry 3270 (class 2606 OID 16433)
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id);


--
-- TOC entry 3292 (class 2606 OID 16510)
-- Name: branch branch_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.branch
    ADD CONSTRAINT branch_name_key UNIQUE (name);


--
-- TOC entry 3294 (class 2606 OID 16508)
-- Name: branch branch_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.branch
    ADD CONSTRAINT branch_pkey PRIMARY KEY (id);


--
-- TOC entry 3272 (class 2606 OID 16435)
-- Name: character_artist character_artist_character_id_artist_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_artist
    ADD CONSTRAINT character_artist_character_id_artist_id_key UNIQUE (character_id, artist_id);


--
-- TOC entry 3274 (class 2606 OID 16437)
-- Name: character_artist character_artist_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_artist
    ADD CONSTRAINT character_artist_pkey PRIMARY KEY (character_id, artist_id);


--
-- TOC entry 3264 (class 2606 OID 16439)
-- Name: character character_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_name_key UNIQUE (name);


--
-- TOC entry 3266 (class 2606 OID 16441)
-- Name: character character_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_pkey PRIMARY KEY (id);


--
-- TOC entry 3288 (class 2606 OID 16499)
-- Name: class class_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_name_key UNIQUE (name);


--
-- TOC entry 3290 (class 2606 OID 16497)
-- Name: class class_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_pkey PRIMARY KEY (id);


--
-- TOC entry 3276 (class 2606 OID 16443)
-- Name: infection infection_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.infection
    ADD CONSTRAINT infection_name_key UNIQUE (name);


--
-- TOC entry 3278 (class 2606 OID 16445)
-- Name: infection infection_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.infection
    ADD CONSTRAINT infection_pkey PRIMARY KEY (id);


--
-- TOC entry 3280 (class 2606 OID 16447)
-- Name: place_of_birth place_of_birth_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.place_of_birth
    ADD CONSTRAINT place_of_birth_name_key UNIQUE (name);


--
-- TOC entry 3282 (class 2606 OID 16449)
-- Name: place_of_birth place_of_birth_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.place_of_birth
    ADD CONSTRAINT place_of_birth_pkey PRIMARY KEY (id);


--
-- TOC entry 3284 (class 2606 OID 16451)
-- Name: race race_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.race
    ADD CONSTRAINT race_name_key UNIQUE (name);


--
-- TOC entry 3286 (class 2606 OID 16453)
-- Name: race race_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.race
    ADD CONSTRAINT race_pkey PRIMARY KEY (id);


--
-- TOC entry 3300 (class 2606 OID 16454)
-- Name: character_artist character_artist_artist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_artist
    ADD CONSTRAINT character_artist_artist_id_fkey FOREIGN KEY (artist_id) REFERENCES public.artist(id);


--
-- TOC entry 3301 (class 2606 OID 16459)
-- Name: character_artist character_artist_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_artist
    ADD CONSTRAINT character_artist_character_id_fkey FOREIGN KEY (character_id) REFERENCES public."character"(id);


--
-- TOC entry 3295 (class 2606 OID 24688)
-- Name: character character_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branch(id) NOT VALID;


--
-- TOC entry 3296 (class 2606 OID 24682)
-- Name: character character_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.class(id) NOT VALID;


--
-- TOC entry 3297 (class 2606 OID 16464)
-- Name: character character_infection_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_infection_id_fkey FOREIGN KEY (infection_id) REFERENCES public.infection(id) NOT VALID;


--
-- TOC entry 3298 (class 2606 OID 16469)
-- Name: character character_place_of_birth_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_place_of_birth_id_fkey FOREIGN KEY (place_of_birth_id) REFERENCES public.place_of_birth(id) NOT VALID;


--
-- TOC entry 3299 (class 2606 OID 16474)
-- Name: character character_race_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_race_id_fkey FOREIGN KEY (race_id) REFERENCES public.race(id) NOT VALID;


-- Completed on 2025-01-02 10:13:39 UTC

--
-- PostgreSQL database dump complete
--

