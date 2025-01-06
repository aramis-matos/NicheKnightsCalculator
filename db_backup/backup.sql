--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2

-- Started on 2025-01-06 10:22:49 UTC

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
    height smallint NOT NULL,
    place_of_birth_id bigint DEFAULT 1 NOT NULL,
    race_id bigint DEFAULT 1 NOT NULL,
    infection_id bigint DEFAULT 1 NOT NULL,
    class_id bigint DEFAULT 1 NOT NULL,
    branch_id bigint DEFAULT 1 NOT NULL,
    gender_id bigint DEFAULT 1 NOT NULL
);


ALTER TABLE public."character" OWNER TO root;

--
-- TOC entry 234 (class 1255 OID 16395)
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
-- TOC entry 235 (class 1255 OID 16396)
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
-- TOC entry 218 (class 1259 OID 16403)
-- Name: artist; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.artist (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.artist OWNER TO root;

--
-- TOC entry 241 (class 1255 OID 16522)
-- Name: all_character_artist(text); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_character_artist(search text) RETURNS SETOF public.artist
    LANGUAGE sql STABLE
    AS $$
SELECT
    "artist"
FROM
    "character_artist"
    JOIN "character" ON "character_artist".character_id = "character".id
    JOIN "artist" ON "character_artist".artist_id = "artist".id
WHERE
    "character".name ILIKE search
$$;


ALTER FUNCTION public.all_character_artist(search text) OWNER TO root;

--
-- TOC entry 236 (class 1255 OID 16397)
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
-- TOC entry 244 (class 1255 OID 16398)
-- Name: all_general_search(text); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.all_general_search(search text) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT
    "character"
FROM
    "character"
    JOIN "place_of_birth" ON "character".place_of_birth_id = "place_of_birth".id
    JOIN "race" ON "character".infection_id = "race".id
    JOIN "infection" ON "character".infection_id = "infection".id
    JOIN "class" ON "character".class_id = "class".id
    JOIN "branch" ON "character".branch_id = "branch".id
	JOIN "gender" ON "character".gender_id = "gender".id
WHERE search IS NULL OR "character".name ILIKE ('%' || search || '%')
    OR "gender".name ILIKE (search || '%')
    OR "place_of_birth".name ILIKE ('%' || search || '%')
    OR "race".name ILIKE ('%' || search || '%')
    OR "infection".name ILIKE (search || '%')
    OR "class".name ILIKE ('%' || search || '%')
    OR "branch".name ILIKE (search || '%')
ORDER BY "character".name
$$;


ALTER FUNCTION public.all_general_search(search text) OWNER TO root;

--
-- TOC entry 237 (class 1255 OID 16399)
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
-- TOC entry 238 (class 1255 OID 16400)
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
-- TOC entry 239 (class 1255 OID 16401)
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
-- TOC entry 240 (class 1255 OID 16402)
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
-- TOC entry 243 (class 1255 OID 16545)
-- Name: or_branches(text[]); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.or_branches(ops text[]) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT "character" FROM "character" JOIN "branch" ON "character".branch_id = "branch".id WHERE "branch".name = ANY(ops) ORDER BY "character".name ASC
$$;


ALTER FUNCTION public.or_branches(ops text[]) OWNER TO root;

--
-- TOC entry 242 (class 1255 OID 16544)
-- Name: or_classes(text[]); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.or_classes(ops text[]) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT "character" FROM "character" JOIN "class" ON "character".class_id = "class".id WHERE "class".name = ANY(ops) ORDER BY "character".name ASC
$$;


ALTER FUNCTION public.or_classes(ops text[]) OWNER TO root;

--
-- TOC entry 248 (class 1255 OID 16550)
-- Name: or_genders(text[]); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.or_genders(ops text[]) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT "character" FROM "character" JOIN "gender" ON "character".gender_id = "gender".id WHERE "gender".name = ANY(ops) ORDER BY "character".name ASC
$$;


ALTER FUNCTION public.or_genders(ops text[]) OWNER TO root;

--
-- TOC entry 247 (class 1255 OID 16549)
-- Name: or_infections(text[]); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.or_infections(ops text[]) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT "character" FROM "character" JOIN "infection" ON "character".infection_id = "infection".id WHERE "infection".name = ANY(ops) ORDER BY "character".name ASC
$$;


ALTER FUNCTION public.or_infections(ops text[]) OWNER TO root;

--
-- TOC entry 245 (class 1255 OID 16546)
-- Name: or_places_of_birth(text[]); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.or_places_of_birth(ops text[]) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT "character" FROM "character" JOIN "place_of_birth" ON "character".place_of_birth_id = "place_of_birth".id WHERE "place_of_birth".name = ANY(ops) ORDER BY "character".name ASC
$$;


ALTER FUNCTION public.or_places_of_birth(ops text[]) OWNER TO root;

--
-- TOC entry 246 (class 1255 OID 16547)
-- Name: or_races(text[]); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.or_races(ops text[]) RETURNS SETOF public."character"
    LANGUAGE sql STABLE
    AS $$
SELECT "character" FROM "character" JOIN "race" ON "character".race_id = "race".id WHERE "race".name = ANY(ops) ORDER BY "character".name ASC
$$;


ALTER FUNCTION public.or_races(ops text[]) OWNER TO root;

--
-- TOC entry 219 (class 1259 OID 16408)
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
-- TOC entry 3487 (class 0 OID 0)
-- Dependencies: 219
-- Name: artist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.artist_id_seq OWNED BY public.artist.id;


--
-- TOC entry 220 (class 1259 OID 16409)
-- Name: branch; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.branch (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.branch OWNER TO root;

--
-- TOC entry 221 (class 1259 OID 16414)
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
-- TOC entry 3488 (class 0 OID 0)
-- Dependencies: 221
-- Name: branch_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.branch_id_seq OWNED BY public.branch.id;


--
-- TOC entry 222 (class 1259 OID 16415)
-- Name: character_artist; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.character_artist (
    character_id bigint NOT NULL,
    artist_id bigint NOT NULL
);


ALTER TABLE public.character_artist OWNER TO root;

--
-- TOC entry 223 (class 1259 OID 16418)
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
-- TOC entry 3489 (class 0 OID 0)
-- Dependencies: 223
-- Name: character_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.character_id_seq OWNED BY public."character".id;


--
-- TOC entry 224 (class 1259 OID 16419)
-- Name: class; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.class (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.class OWNER TO root;

--
-- TOC entry 225 (class 1259 OID 16424)
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
-- TOC entry 3490 (class 0 OID 0)
-- Dependencies: 225
-- Name: class_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.class_id_seq OWNED BY public.class.id;


--
-- TOC entry 233 (class 1259 OID 16524)
-- Name: gender; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.gender (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.gender OWNER TO root;

--
-- TOC entry 232 (class 1259 OID 16523)
-- Name: gender_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.gender_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gender_id_seq OWNER TO root;

--
-- TOC entry 3491 (class 0 OID 0)
-- Dependencies: 232
-- Name: gender_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.gender_id_seq OWNED BY public.gender.id;


--
-- TOC entry 226 (class 1259 OID 16425)
-- Name: infection; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.infection (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.infection OWNER TO root;

--
-- TOC entry 227 (class 1259 OID 16430)
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
-- TOC entry 3492 (class 0 OID 0)
-- Dependencies: 227
-- Name: infection_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.infection_id_seq OWNED BY public.infection.id;


--
-- TOC entry 228 (class 1259 OID 16431)
-- Name: place_of_birth; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.place_of_birth (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.place_of_birth OWNER TO root;

--
-- TOC entry 229 (class 1259 OID 16436)
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
-- TOC entry 3493 (class 0 OID 0)
-- Dependencies: 229
-- Name: place_of_birth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.place_of_birth_id_seq OWNED BY public.place_of_birth.id;


--
-- TOC entry 230 (class 1259 OID 16437)
-- Name: race; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.race (
    id bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.race OWNER TO root;

--
-- TOC entry 231 (class 1259 OID 16442)
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
-- TOC entry 3494 (class 0 OID 0)
-- Dependencies: 231
-- Name: race_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.race_id_seq OWNED BY public.race.id;


--
-- TOC entry 3271 (class 2604 OID 16443)
-- Name: artist id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.artist ALTER COLUMN id SET DEFAULT nextval('public.artist_id_seq'::regclass);


--
-- TOC entry 3272 (class 2604 OID 16444)
-- Name: branch id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.branch ALTER COLUMN id SET DEFAULT nextval('public.branch_id_seq'::regclass);


--
-- TOC entry 3264 (class 2604 OID 16445)
-- Name: character id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character" ALTER COLUMN id SET DEFAULT nextval('public.character_id_seq'::regclass);


--
-- TOC entry 3273 (class 2604 OID 16446)
-- Name: class id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.class ALTER COLUMN id SET DEFAULT nextval('public.class_id_seq'::regclass);


--
-- TOC entry 3277 (class 2604 OID 16527)
-- Name: gender id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.gender ALTER COLUMN id SET DEFAULT nextval('public.gender_id_seq'::regclass);


--
-- TOC entry 3274 (class 2604 OID 16447)
-- Name: infection id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.infection ALTER COLUMN id SET DEFAULT nextval('public.infection_id_seq'::regclass);


--
-- TOC entry 3275 (class 2604 OID 16448)
-- Name: place_of_birth id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.place_of_birth ALTER COLUMN id SET DEFAULT nextval('public.place_of_birth_id_seq'::regclass);


--
-- TOC entry 3276 (class 2604 OID 16449)
-- Name: race id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.race ALTER COLUMN id SET DEFAULT nextval('public.race_id_seq'::regclass);


--
-- TOC entry 3466 (class 0 OID 16403)
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
-- TOC entry 3468 (class 0 OID 16409)
-- Dependencies: 220
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
-- TOC entry 3465 (class 0 OID 16385)
-- Dependencies: 217
-- Data for Name: character; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."character" (id, name, height, place_of_birth_id, race_id, infection_id, class_id, branch_id, gender_id) FROM stdin;
43	Jessica the Liberated	149	32	15	2	2	53	4
44	Kal'tsit	169	21	15	1	4	41	4
45	Kirin R Yato	161	9	26	1	6	23	4
46	Lappland the Decadenza	162	27	23	1	1	40	4
47	Lee	193	34	22	2	6	42	3
48	Lessing	175	16	7	2	3	20	3
49	Lin	166	17	44	2	1	45	4
50	Ling	166	34	37	2	7	60	4
51	Logos	178	12	34	1	1	15	3
52	Lumen	177	10	1	2	4	63	3
53	Magallan	160	4	21	2	7	60	4
54	Marcille	160	20	14	2	1	57	4
55	Mizuki	161	9	1	2	6	4	3
56	Mostima	170	15	37	2	1	57	4
57	Mountain	195	4	15	1	3	24	3
58	Mudrock	163	12	34	1	2	35	4
59	Muelsyse	169	28	14	2	8	62	4
60	Młynar	191	13	19	2	3	36	3
61	Narantuya	177	24	19	2	5	37	4
62	Nearl the Radiant Knight	171	13	19	2	3	20	4
63	Nian	165	34	37	3	2	49	4
64	Nightingale	164	12	34	1	4	43	4
65	Nymph	156	12	34	1	1	47	4
66	Pallas	162	18	16	1	3	34	4
67	Passenger	187	4	21	1	1	13	3
68	Penance	168	27	23	2	2	35	4
69	Pepe	155	24	15	2	3	22	4
70	Phantom	185	32	15	1	6	23	3
71	Pozëmka	177	31	23	2	5	29	4
72	Qiubai	178	34	13	2	3	38	4
73	Ray	170	22	8	1	5	32	4
74	Reed the Flame Shadow	172	32	10	1	4	33	4
75	Rosa	174	31	41	2	5	10	4
76	Rosmontis	142	4	15	1	5	25	4
77	Saga	164	9	27	2	8	46	4
78	Saileach	166	32	42	2	8	59	4
79	Saria	174	4	42	2	2	28	4
80	Schwarz	169	22	15	2	5	29	4
81	Shining	175	12	34	2	4	41	4
82	Shu	165	34	37	2	2	28	4
83	Siege	172	32	6	2	8	46	4
84	Silence the Paradigmatic	154	4	21	1	7	1	4
85	SilverAsh	192	14	15	2	3	38	3
86	Skadi	166	1	38	2	3	20	4
87	Skadi the Corrupting Heart	166	1	37	2	7	9	4
88	Specter the Unchained	165	1	1	1	6	19	4
89	Stainless	178	32	15	2	7	5	3
90	Surtr	162	29	34	1	3	7	4
91	Suzuran	137	9	43	1	7	18	4
92	Swire the Elegant Wit	163	17	15	2	6	42	4
93	Texas the Omertosa	161	4	23	2	6	23	4
94	Thorns	177	10	1	2	3	38	3
95	Thorns the Lodestar	177	10	1	2	6	3	3
96	Typhon	155	23	34	1	5	10	4
97	Ulpianus	189	1	1	2	3	16	3
98	Vigil	174	27	23	2	8	62	3
99	Vina Victoria	172	32	6	2	3	7	4
100	Virtuosa	168	15	33	2	7	52	4
101	Viviana	171	16	13	2	3	7	4
102	Vulpisfoglia	161	27	43	2	8	46	4
103	W	165	12	34	1	5	6	4
104	Weedy	155	10	1	2	6	50	4
105	Wiš'adel	165	12	34	1	5	25	4
106	Zuo Le	175	34	29	2	3	56	3
107	Absinthe	159	31	41	2	1	15	4
108	Akafuyu	176	9	1	2	3	56	4
109	Almond	140	4	27	1	6	31	4
110	Amiya	142	22	8	1	3	7	4
111	Andreana	166	10	1	2	5	17	4
112	Aosta	177	27	23	1	5	58	3
113	April	157	22	8	1	5	39	4
114	Aroma	157	27	23	1	1	11	4
115	Asbestos	156	22	35	1	2	8	4
116	Ashlock	164	13	44	1	2	26	4
117	Astesia	165	4	21	1	3	7	4
118	Astgenne	166	4	21	1	1	13	4
119	Aurora	169	14	41	1	2	21	4
120	Ayerscarpe	173	22	8	2	3	38	3
121	Bassline	160	16	23	2	2	28	3
122	Beeswax	157	24	7	2	1	45	4
123	Bena	143	32	7	2	6	19	4
124	Bibeak	161	23	21	1	3	61	4
125	Bison	163	17	16	2	2	49	3
126	Blacknight	166	22	35	1	8	62	4
127	Blitz	175	29	38	2	2	53	3
128	Blue Poison	157	29	4	2	5	39	4
129	Bobbing	178	4	27	2	7	52	3
130	Breeze	162	32	43	1	4	43	4
131	Broca	189	27	15	1	3	12	3
132	Bryophyta	178	25	21	1	3	34	3
133	Cantabile	169	3	21	1	8	2	4
134	Catherine	171	32	15	1	7	5	4
135	Cement	155	22	44	2	2	21	4
136	Ceylon	162	26	21	2	4	63	4
137	Chiave	182	27	43	1	8	46	3
138	Chilchuck	-1	6	17	2	8	2	3
139	Cliffheart	163	14	15	1	6	31	4
140	Coldshot	173	4	13	2	5	32	4
141	Corroserum	172	4	29	2	1	11	3
142	Croissant	163	18	16	2	2	49	4
143	Czerny	182	16	13	1	2	8	3
144	Dagda	155	32	15	2	3	24	4
145	Delphine	152	32	15	2	1	44	4
146	Diamante	180	16	7	1	1	47	3
147	Doc	177	29	38	2	3	34	3
148	Elysium	187	10	21	1	8	59	3
149	Enforcer	176	15	33	2	6	50	3
150	Erato	158	18	21	2	5	10	4
151	Executor	181	15	33	2	5	58	3
152	FEater	160	34	41	1	6	50	4
153	Fang the Fire-sharpened	162	13	19	1	8	14	4
154	Figurino	165	27	23	2	6	42	3
155	Firewatch	158	29	13	2	5	17	4
156	Firewhistle	166	22	21	2	2	26	4
157	Flamebringer	190	12	34	1	3	20	3
158	Flint	144	24	21	2	3	24	4
159	Folinic	164	31	15	1	4	41	4
160	Franka	163	4	43	1	3	20	4
161	Frost	172	29	38	2	6	64	4
162	Fuze	180	29	38	2	3	12	3
163	Glaucus	159	2	37	2	7	18	4
164	Grain Buds	153	34	21	2	7	18	4
165	Grani	154	32	19	2	8	14	4
166	GreyThroat	162	28	21	2	5	39	4
167	Greyy the Lightningbearer	169	3	27	1	5	25	3
168	Harmonie	160	32	15	2	1	44	4
169	Harold	190	32	15	2	4	65	3
170	Heavyrain	159	24	19	2	2	49	4
171	Heidi	165	32	15	2	7	9	4
172	Hibiscus the Purifier	160	32	34	1	4	33	4
173	Highmore	156	10	1	2	3	51	4
174	Honeyberry	155	22	44	2	4	65	4
175	Hung	183	17	27	2	2	28	3
176	Iana	157	29	38	2	6	19	4
177	Indra	173	29	15	1	3	24	4
178	Insider	184	15	33	2	5	39	3
179	Iris	147	32	15	2	1	44	4
180	Istina	156	31	41	2	7	18	4
181	Jieyun	164	34	2	1	5	6	4
182	Kafka	149	4	21	1	6	23	4
183	Kazemaru	157	9	15	2	6	19	4
184	Kestrel	170	24	21	1	8	46	4
185	Kirara	160	9	1	1	6	4	4
186	Kjera	165	14	37	2	1	40	4
187	Kroos the Keen Glint	161	22	8	1	5	39	4
188	La Pluma	166	3	21	2	3	51	4
189	Laios	185	20	36	2	3	20	3
190	Lappland	162	27	23	1	3	38	4
191	Lava the Purgatory	158	32	34	1	1	57	4
192	Leizi	171	34	20	2	1	13	4
193	Leonhardt	165	22	8	1	1	57	3
194	Leto	167	31	41	2	3	38	4
195	Liskarm	156	33	42	2	2	53	4
196	Lucilla	166	1	1	2	7	30	4
197	Lunacub	148	27	23	1	5	17	4
198	Manticore	155	24	24	1	6	4	4
199	Mayer	159	4	3	2	7	60	4
200	Melanite	155	4	29	1	5	29	4
201	Meteorite	170	12	34	1	5	6	4
202	Minimalist	130	5	11	1	1	40	3
203	Mint	155	32	15	1	1	45	4
204	Mitm	165	12	34	1	8	62	3
205	Morgan	165	32	15	2	3	20	4
206	Mr. Nothing	187	34	21	2	6	42	3
207	Mulberry	158	34	21	1	4	65	4
208	Nearl	171	13	19	1	2	28	4
209	Nightmare	156	32	15	1	1	15	4
210	Nine-Colored Deer	172	34	13	2	7	1	4
211	Odda	168	12	34	1	3	22	3
212	Paprika	155	4	34	1	4	13	4
213	Papyrus	160	24	15	2	4	13	4
214	Philae	168	24	34	1	2	48	4
215	Platinum	160	13	19	2	5	39	4
216	Poncirus	155	25	21	1	8	46	4
217	Pramanix	161	14	15	2	7	30	4
218	Projekt Red	162	28	23	2	6	23	4
219	Provence	162	27	23	1	5	29	4
220	Proviso	165	13	19	2	7	18	4
221	Ptilopsis	164	4	21	3	4	43	4
222	Puzzle	177	32	42	1	8	2	3
223	Qanipalaat	169	23	43	2	1	15	3
224	Quercus	174	32	15	2	7	1	4
225	Rathalos S Noir Corne	180	9	26	1	3	56	3
226	Reed	172	32	10	1	8	14	4
227	Robin	155	4	3	2	6	64	4
228	Rockrock	161	32	15	2	1	40	4
229	Rose Salt	146	10	29	1	4	43	4
230	Sand Reckoner	170	24	21	2	7	60	3
231	Santalla	170	23	15	1	1	57	4
232	Savage	160	22	8	2	3	12	4
233	Scene	154	24	30	1	7	60	4
234	Senshi	140	11	12	2	2	28	3
235	Sesa	189	24	42	2	5	6	3
236	Shalem	179	32	29	1	2	8	3
237	Shamare	138	27	43	1	7	30	4
238	Sideroca	164	18	16	2	3	7	4
239	Silence	154	4	21	1	4	41	4
240	Skyfire	162	32	15	2	1	57	4
241	Snowsant	155	17	21	2	6	31	4
242	Sora	155	30	40	2	7	9	4
243	Specter	162	1	37	3	3	12	4
244	Spuria	159	15	33	2	6	27	4
245	Swire	163	17	15	2	3	34	4
246	Tachanka	183	29	38	2	3	61	3
247	Tecno	130	3	11	1	1	54	4
248	Tequila	182	3	27	2	3	36	3
249	Texas	161	4	23	2	8	46	4
250	Tin Man	184	28	37	3	6	3	3
251	Toddifons	168	32	42	1	5	10	4
252	Tomimi	142	24	5	2	1	15	4
253	Tsukinogi	165	9	13	1	7	1	4
254	Tuye	153	24	16	1	4	41	4
255	Underflow	170	1	1	2	2	53	4
256	Valarqvin	188	23	34	1	7	52	4
257	Vendela	160	32	15	1	4	33	4
258	Vulcan	170	18	16	1	2	35	4
259	Waai Fu	162	34	15	2	6	23	4
260	Wanqing	170	34	16	2	8	59	3
261	Warfarin	157	12	34	2	4	41	4
262	Warmy	140	22	8	1	1	47	4
263	Whislash	165	13	19	2	3	34	4
264	Whisperain	169	10	1	2	4	63	4
265	Wild Mane	158	13	19	1	8	14	4
266	Wind Chimes	175	34	16	1	3	16	4
267	Windflit	180	4	27	2	7	5	3
268	Zima	162	31	41	2	8	46	4
269	Pith	165	32	21	1	1	57	4
270	Sharp	180	4	29	1	3	20	3
271	Stormeye	180	12	34	1	5	39	3
272	Touch	152	16	7	1	4	41	4
273	Tulip	177	10	29	1	8	46	4
274	Aciddrop	150	4	21	1	5	29	4
275	Ambriel	160	15	33	2	5	17	4
276	Arene	161	15	33	1	3	38	3
277	Beanstalk	155	4	32	2	8	62	4
278	Beehunter	163	31	41	1	3	24	4
279	Bubble	135	24	9	1	2	49	4
280	Caper	150	3	8	1	5	37	4
281	Chestnut	132	28	11	2	4	65	3
282	Click	144	28	44	2	1	40	4
283	Contrail	155	4	44	1	6	55	4
284	Conviction	145	18	39	1	3	20	1
285	Courier	177	14	18	2	8	46	3
286	Cuora	148	28	28	1	2	49	4
287	Cutter	155	4	43	1	3	61	4
288	Deepcolor	163	28	37	2	7	60	4
289	Dobermann	163	3	27	1	3	34	4
290	Earthspirit	161	16	7	1	7	18	4
291	Estelle	162	28	5	1	3	12	4
292	Ethan	163	29	35	1	6	4	3
293	Frostleaf	157	4	43	1	3	38	4
3	Aak	161	17	15	2	6	27	3
4	Angelina	162	8	43	1	7	18	4
5	Archetto	152	15	21	2	5	39	4
6	Ascalon	175	12	34	1	6	4	4
7	Ash	170	29	38	2	5	39	4
8	Bagpipe	167	32	42	2	8	14	4
9	Blaze	172	32	15	1	3	12	4
10	Blemishine	165	13	19	2	2	28	4
11	Carnelian	173	24	7	2	1	45	4
12	Ceobe	153	3	27	1	1	15	4
13	Ch'en	168	17	22	3	3	61	4
14	Ch'en the Holungday	168	17	22	1	5	58	4
15	Chongyue	188	34	37	2	3	24	3
16	Civilight Eterna	165	12	37	3	7	9	4
17	Crownslayer	161	31	32	1	6	23	4
18	Degenbrecher	182	16	7	2	3	61	4
19	Dorothy	170	4	44	2	6	64	4
20	Dusk	162	34	37	2	1	57	4
21	Ebenholz	173	16	7	1	1	44	3
22	Ela	173	29	38	2	6	64	4
23	Eunectes	171	24	29	1	2	21	4
24	Executor the Ex Foedere	181	15	33	2	3	51	3
25	Exusiai	159	15	33	2	5	39	4
26	Eyjafjalla	145	16	7	1	1	15	4
27	Eyjafjalla the Hvít Aska	153	16	7	1	4	65	4
28	Fartooth	155	13	21	1	5	17	4
29	Fiammetta	171	15	21	2	5	6	4
30	Flametail	159	13	44	1	8	46	4
31	Gavial the Invincible	163	24	5	1	3	12	4
32	Gladiia	181	1	37	2	6	31	4
33	Gnosis	188	14	21	2	7	30	3
34	Goldenglow	159	32	15	1	1	40	4
35	Hellagur	193	31	21	1	3	56	3
36	Ho'olheyak	171	4	37	2	1	15	4
37	Hoederer	185	12	34	1	3	16	3
38	Horn	168	32	23	2	2	26	4
39	Hoshiguma	184	9	26	2	2	49	4
40	Ifrit	159	29	34	3	1	11	4
41	Ines	168	12	37	1	8	2	4
42	Irene	156	10	21	2	3	61	4
294	Gavial	163	28	5	1	4	41	4
295	Gitano	171	23	13	1	1	57	4
296	Gravel	156	13	44	2	6	23	4
297	Greyy	163	3	27	1	1	57	3
298	Gummy	155	31	41	2	2	28	4
299	Haze	158	32	15	1	1	15	4
300	Humus	185	4	16	1	3	51	3
301	Indigo	167	10	29	2	1	44	4
302	Jackie	157	4	27	1	3	24	4
303	Jaye	174	17	41	2	6	42	3
304	Jessica	147	32	15	2	5	39	4
305	Luo Xiaohei	-1	29	15	2	3	38	3
306	Lutonada	159	3	44	1	2	35	4
307	Matoimaru	172	9	26	2	3	20	4
308	Matterhorn	182	14	16	2	2	49	3
309	May	151	32	21	2	5	39	4
310	Meteor	164	13	19	1	5	39	4
311	Mousse	154	32	15	1	3	7	4
312	Myrrh	143	29	43	2	4	41	4
313	Myrtle	131	29	11	2	8	59	4
314	Perfumer	158	18	43	1	4	43	4
315	Pinecone	148	4	21	2	5	58	4
316	Podenco	145	3	27	2	7	18	4
317	Pudding	156	4	1	3	1	13	4
318	Purestream	155	34	1	2	4	63	4
319	Quartz	173	4	23	2	3	16	4
320	Roberta	155	4	3	2	7	5	4
321	Rope	155	22	8	1	6	31	4
322	Scavenger	164	29	44	1	8	46	4
323	Shaw	135	17	44	2	6	50	4
324	Shirayuki	154	9	3	2	5	6	4
325	Sussurro	142	27	43	1	4	41	4
326	Totter	185	24	21	1	5	10	3
327	Utage	161	9	38	1	3	56	4
328	Verdant	163	32	29	1	6	19	3
329	Vermeil	153	29	43	1	5	39	4
330	Vigna	142	12	34	1	8	14	4
331	Adnachiel	171	15	33	1	5	39	3
332	Ansel	163	22	8	2	4	41	3
333	Beagle	154	3	27	1	2	49	4
334	Cardigan	156	16	27	2	2	49	4
335	Catapult	163	13	19	1	5	6	4
336	Fang	158	13	19	3	8	46	4
337	Hibiscus	153	32	34	1	4	41	4
338	Kroos	154	22	8	1	5	39	4
339	Lava	154	32	34	1	1	57	4
340	Melantha	161	32	15	1	3	20	4
341	Midnight	187	7	34	1	3	38	3
342	Orchid	164	4	21	1	7	18	4
343	Plume	158	15	21	2	8	14	4
344	Popukar	144	22	8	1	3	12	4
345	Spot	169	24	31	1	2	28	3
346	Steward	172	14	43	1	1	15	3
347	Vanilla	172	33	42	2	8	46	4
348	12F	181	29	35	2	1	57	3
349	Durin	131	28	11	2	1	15	4
350	Noir Corne	180	9	26	1	2	49	3
351	Rangers	179	28	35	2	5	39	3
352	Yato	161	9	26	1	8	46	4
353	Castle-3	167	19	25	3	3	20	3
354	Friston-3	145	19	25	3	2	49	3
355	Justice Knight	160	19	25	3	5	39	4
356	Lancet-2	149	19	25	3	4	41	4
357	PhonoR-0	160	19	25	3	7	52	4
358	THRM-EX	160	19	25	3	6	23	3
359	Terra Research Commission	-1	29	37	2	5	25	2
360	U-Official	159	28	44	2	7	9	4
\.


--
-- TOC entry 3470 (class 0 OID 16415)
-- Dependencies: 222
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
-- TOC entry 3472 (class 0 OID 16419)
-- Dependencies: 224
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
-- TOC entry 3481 (class 0 OID 16524)
-- Dependencies: 233
-- Data for Name: gender; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.gender (id, name) FROM stdin;
1	Conviction
2	Unknown
3	Male
4	Female
\.


--
-- TOC entry 3474 (class 0 OID 16425)
-- Dependencies: 226
-- Data for Name: infection; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.infection (id, name) FROM stdin;
1	Infected
2	Not Infected
3	Unknown
\.


--
-- TOC entry 3476 (class 0 OID 16431)
-- Dependencies: 228
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
-- TOC entry 3478 (class 0 OID 16437)
-- Dependencies: 230
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
-- TOC entry 3495 (class 0 OID 0)
-- Dependencies: 219
-- Name: artist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.artist_id_seq', 114, true);


--
-- TOC entry 3496 (class 0 OID 0)
-- Dependencies: 221
-- Name: branch_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.branch_id_seq', 65, true);


--
-- TOC entry 3497 (class 0 OID 0)
-- Dependencies: 223
-- Name: character_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.character_id_seq', 360, true);


--
-- TOC entry 3498 (class 0 OID 0)
-- Dependencies: 225
-- Name: class_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.class_id_seq', 8, true);


--
-- TOC entry 3499 (class 0 OID 0)
-- Dependencies: 232
-- Name: gender_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.gender_id_seq', 4, true);


--
-- TOC entry 3500 (class 0 OID 0)
-- Dependencies: 227
-- Name: infection_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.infection_id_seq', 41, true);


--
-- TOC entry 3501 (class 0 OID 0)
-- Dependencies: 229
-- Name: place_of_birth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.place_of_birth_id_seq', 34, true);


--
-- TOC entry 3502 (class 0 OID 0)
-- Dependencies: 231
-- Name: race_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.race_id_seq', 44, true);


--
-- TOC entry 3283 (class 2606 OID 16451)
-- Name: artist artist_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_name_key UNIQUE (name);


--
-- TOC entry 3285 (class 2606 OID 16453)
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id);


--
-- TOC entry 3287 (class 2606 OID 16455)
-- Name: branch branch_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.branch
    ADD CONSTRAINT branch_name_key UNIQUE (name);


--
-- TOC entry 3289 (class 2606 OID 16457)
-- Name: branch branch_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.branch
    ADD CONSTRAINT branch_pkey PRIMARY KEY (id);


--
-- TOC entry 3291 (class 2606 OID 16459)
-- Name: character_artist character_artist_character_id_artist_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_artist
    ADD CONSTRAINT character_artist_character_id_artist_id_key UNIQUE (character_id, artist_id);


--
-- TOC entry 3293 (class 2606 OID 16461)
-- Name: character_artist character_artist_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_artist
    ADD CONSTRAINT character_artist_pkey PRIMARY KEY (character_id, artist_id);


--
-- TOC entry 3279 (class 2606 OID 16463)
-- Name: character character_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_name_key UNIQUE (name);


--
-- TOC entry 3281 (class 2606 OID 16465)
-- Name: character character_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_pkey PRIMARY KEY (id);


--
-- TOC entry 3295 (class 2606 OID 16467)
-- Name: class class_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_name_key UNIQUE (name);


--
-- TOC entry 3297 (class 2606 OID 16469)
-- Name: class class_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_pkey PRIMARY KEY (id);


--
-- TOC entry 3311 (class 2606 OID 16531)
-- Name: gender gender_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT gender_pkey PRIMARY KEY (id);


--
-- TOC entry 3299 (class 2606 OID 16471)
-- Name: infection infection_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.infection
    ADD CONSTRAINT infection_name_key UNIQUE (name);


--
-- TOC entry 3301 (class 2606 OID 16473)
-- Name: infection infection_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.infection
    ADD CONSTRAINT infection_pkey PRIMARY KEY (id);


--
-- TOC entry 3303 (class 2606 OID 16475)
-- Name: place_of_birth place_of_birth_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.place_of_birth
    ADD CONSTRAINT place_of_birth_name_key UNIQUE (name);


--
-- TOC entry 3305 (class 2606 OID 16477)
-- Name: place_of_birth place_of_birth_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.place_of_birth
    ADD CONSTRAINT place_of_birth_pkey PRIMARY KEY (id);


--
-- TOC entry 3307 (class 2606 OID 16479)
-- Name: race race_name_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.race
    ADD CONSTRAINT race_name_key UNIQUE (name);


--
-- TOC entry 3309 (class 2606 OID 16481)
-- Name: race race_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.race
    ADD CONSTRAINT race_pkey PRIMARY KEY (id);


--
-- TOC entry 3318 (class 2606 OID 16482)
-- Name: character_artist character_artist_artist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_artist
    ADD CONSTRAINT character_artist_artist_id_fkey FOREIGN KEY (artist_id) REFERENCES public.artist(id);


--
-- TOC entry 3319 (class 2606 OID 16487)
-- Name: character_artist character_artist_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.character_artist
    ADD CONSTRAINT character_artist_character_id_fkey FOREIGN KEY (character_id) REFERENCES public."character"(id);


--
-- TOC entry 3312 (class 2606 OID 16492)
-- Name: character character_branch_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_branch_id_fkey FOREIGN KEY (branch_id) REFERENCES public.branch(id) NOT VALID;


--
-- TOC entry 3313 (class 2606 OID 16497)
-- Name: character character_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.class(id) NOT VALID;


--
-- TOC entry 3314 (class 2606 OID 16535)
-- Name: character character_gender_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_gender_id_fkey FOREIGN KEY (gender_id) REFERENCES public.gender(id) NOT VALID;


--
-- TOC entry 3315 (class 2606 OID 16502)
-- Name: character character_infection_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_infection_id_fkey FOREIGN KEY (infection_id) REFERENCES public.infection(id) NOT VALID;


--
-- TOC entry 3316 (class 2606 OID 16507)
-- Name: character character_place_of_birth_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_place_of_birth_id_fkey FOREIGN KEY (place_of_birth_id) REFERENCES public.place_of_birth(id) NOT VALID;


--
-- TOC entry 3317 (class 2606 OID 16512)
-- Name: character character_race_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."character"
    ADD CONSTRAINT character_race_id_fkey FOREIGN KEY (race_id) REFERENCES public.race(id) NOT VALID;


-- Completed on 2025-01-06 10:22:49 UTC

--
-- PostgreSQL database dump complete
--

